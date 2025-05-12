/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useLivrosStore } from "~/trpc/livros-store";
import { api } from "~/trpc/client";
import { useAuthStore } from "~/trpc/auth-store";

import {
  FaSave,
  FaTimes,
  FaBook,
  FaUser,
  FaCalendar,
  FaBuilding,
  FaHashtag,
} from "react-icons/fa";

export default function LivroDetalhePageClient() {
  const { id } = useParams<{ id: string }>();
  const livroStore = useLivrosStore.getState();
  const livro = livroStore.getLivroById(Number(id));
  const [editMode, setEditMode] = useState(false);
  const [editedLivro, setEditedLivro] = useState(livro ? { ...livro } : null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [isbn, setIsbn] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auth
  const getAccessToken = useAuthStore((state) => state.getAccessToken);
  const token = getAccessToken();

  // API utils
  const apiUtils = api.useUtils();
  const { mutate: createTiragem } = api.livro.createTiragem.useMutation({
    onSuccess: (data) => {
      setSuccess("Tiragem adicionada com sucesso!");
      setError(null);
      setIsbn("");
      setFormOpen(false);
      setIsSubmitting(false);
      void apiUtils.livro.getLivro.invalidate({
        id: id,
        authToken: token ?? "",
      });
      void apiUtils.livro.getTodosLivros.invalidate({ authToken: token ?? "" });
      setTimeout(() => setSuccess(null), 3000);
    },
    onError: (error) => {
      setError(error.message || "Erro ao adicionar tiragem. Tente novamente.");
      setSuccess(null);
      setIsSubmitting(false);
    },
  });
  const { mutate: editLivro } = api.livro.updateLivro.useMutation({
    onSuccess: (data) => {
      setSuccess("Alterações salvas com sucesso!");
      setError(null);
      setEditMode(false);
      setEditedLivro(data);
      livroStore.updateLivro(data);
      setTimeout(() => setSuccess(null), 3000);
    },
    onError: (error) => {
      setError(error.message || "Erro ao salvar alterações. Tente novamente.");
      setSuccess(null);
    },
  });

  if (!livro) return <div className="text-red-500">Livro não encontrado.</div>;

  const toggleEditMode = () => {
    if (!editMode) {
      setEditMode(true);
      setEditedLivro({ ...livro });
      setError(null);
      setSuccess(null);
    } else {
      setEditMode(false);
      setEditedLivro(null);
      setError(null);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    if (!editedLivro) return;
    setEditedLivro((prev) => ({ ...prev!, [field]: value }));
  };

  const handleSave = () => {
    if (!editedLivro) return;
    setError(null);
    setSuccess(null);
    if (!token) {
      setError("Erro de autenticação. Faça login novamente.");
      return;
    }
    // Comparar campos
    const updates: Record<string, unknown> = {};
    Object.keys(editedLivro).forEach((key) => {
      if (editedLivro[key] !== livro[key]) {
        updates[key] = editedLivro[key];
      }
    });
    if (Object.keys(updates).length === 0) {
      setError("Nenhuma alteração foi feita.");
      return;
    }
    editLivro({ id: String(livro.id), authToken: token, updates });
  };

  const handleSubmitTiragem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isbn) {
      setError("Por favor, informe o ISBN da tiragem.");
      return;
    }
    if (!token) {
      setError("Você precisa estar autenticado para adicionar uma tiragem.");
      return;
    }
    setIsSubmitting(true);
    setError(null);
    createTiragem({
      authToken: token,
      isbn,
      livro: Number(id),
      disponivel: true,
    });
  };

  // Renderiza campo editável
  const renderField = (
    label: string,
    field: string,
    value: unknown,
    icon: React.ReactNode,
  ) => {
    const originalValue = livro[field];
    const isChanged = editedLivro && editedLivro[field] !== originalValue;
    return (
      <div className="mb-3 rounded-xl border border-gray-100 p-4 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md">
        <div className="flex items-center">
          <div className="mr-3 text-blue-600">{icon}</div>
          <div className="flex-grow">
            <span className="font-medium text-gray-700">{label}:</span>{" "}
            {editMode ? (
              <input
                type="text"
                value={editedLivro ? String(editedLivro[field]) : String(value)}
                onChange={(e) => handleInputChange(field, e.target.value)}
                className={`ml-2 rounded-lg border p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none ${isChanged ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
              />
            ) : (
              <span className="text-gray-800">{String(value)}</span>
            )}
          </div>
        </div>
        {isChanged && editMode && (
          <div className="mt-2 rounded-lg bg-blue-50 p-3 text-sm text-blue-600">
            <span className="font-medium">Valor original:</span>{" "}
            {String(originalValue)}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="mx-auto mt-10 max-w-3xl transform overflow-hidden rounded-2xl bg-white p-0 shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Header com gradiente */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Detalhes do Livro</h2>
            <p className="mt-1 text-sm text-blue-100">
              Informações do livro e tiragens disponíveis
            </p>
          </div>
          {editMode ? (
            <div className="flex space-x-3">
              <button
                onClick={handleSave}
                className="flex items-center rounded-lg bg-green-500 px-4 py-2 text-white shadow-md transition-all duration-200 hover:bg-green-600 hover:shadow-lg focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:outline-none"
              >
                <FaSave className="mr-2" />
                <span>Salvar</span>
              </button>
              <button
                onClick={toggleEditMode}
                className="flex items-center rounded-lg bg-red-500 px-4 py-2 text-white shadow-md transition-all duration-200 hover:bg-red-600 hover:shadow-lg focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:outline-none"
              >
                <FaTimes className="mr-2" />
                <span>Cancelar</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <button
                onClick={toggleEditMode}
                className="flex items-center rounded-lg bg-white px-4 py-2 text-blue-800 shadow-md transition-all duration-200 hover:bg-blue-50 hover:shadow-lg focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
                aria-label="Editar livro"
              >
                <FaBook className="mr-2 h-5 w-5" />
                <span>Editar</span>
              </button>
              <button
                onClick={() => setFormOpen(!formOpen)}
                className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none"
              >
                {formOpen ? "Cancelar" : "Adicionar Tiragem"}
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Mensagens de erro e sucesso */}
      <div className="p-6">
        {error && (
          <div className="mb-4 rounded-xl bg-red-50 p-4 text-red-700 shadow-sm">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {error}
            </div>
          </div>
        )}
        {success && (
          <div className="mb-4 rounded-xl bg-green-50 p-4 text-green-700 shadow-sm">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {success}
            </div>
          </div>
        )}
        {/* Formulário de tiragem */}
        {formOpen && (
          <div className="mb-6 rounded-xl border border-gray-200 p-6 shadow-md">
            <h3 className="mb-4 text-xl font-bold text-gray-800">
              Adicionar Nova Tiragem
            </h3>
            <form onSubmit={handleSubmitTiragem}>
              <div className="mb-4">
                <label
                  htmlFor="isbn"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  ISBN
                </label>
                <input
                  type="text"
                  id="isbn"
                  value={isbn}
                  onChange={(e) => setIsbn(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="Digite o ISBN do livro"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`rounded-lg px-4 py-2 text-white ${isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"} transition-colors`}
                >
                  {isSubmitting ? "Adicionando..." : "Adicionar"}
                </button>
              </div>
            </form>
          </div>
        )}
        {/* Informações do livro */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition-all duration-200 hover:shadow-lg">
          <h3 className="mb-4 text-2xl font-bold text-gray-800">
            Informações do Livro
          </h3>
          <p className="mb-6 text-sm text-gray-500">
            Dados cadastrais do livro no sistema de biblioteca
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {renderField(
              "ID",
              "id",
              livro.id,
              <FaHashtag className="h-5 w-5" />,
            )}
            {renderField(
              "Título",
              "titulo",
              livro.titulo,
              <FaBook className="h-5 w-5" />,
            )}
            {renderField(
              "Autor",
              "autor",
              livro.autor,
              <FaUser className="h-5 w-5" />,
            )}
            {renderField(
              "Editora",
              "editora",
              livro.editora,
              <FaBuilding className="h-5 w-5" />,
            )}
            {renderField(
              "Ano de Publicação",
              "ano_publicacao",
              livro.ano_publicacao,
              <FaCalendar className="h-5 w-5" />,
            )}
            {renderField(
              "Total de Exemplares",
              "total_exemplares",
              livro.total_exemplares,
              <FaHashtag className="h-5 w-5" />,
            )}
            {renderField(
              "Descrição",
              "descricao",
              livro.descricao,
              <FaBook className="h-5 w-5" />,
            )}
          </div>
        </div>
        {/* Seção de tiragens */}
        <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-200 hover:shadow-lg">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Tiragens</h3>
              <p className="mt-1 text-sm text-gray-500">
                Lista de tiragens disponíveis para este livro
              </p>
            </div>
            <div className="text-right">
              <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${livro.tiragens && livro.tiragens.length > 0 ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-600"}`}
              >
                {livro.tiragens ? livro.tiragens.length : 0}{" "}
                {livro.tiragens && livro.tiragens.length === 1
                  ? "tiragem"
                  : "tiragens"}
              </span>
            </div>
          </div>
          {livro.tiragens && livro.tiragens.length > 0 ? (
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="p-3 text-sm font-semibold text-gray-700">
                      ISBN
                    </th>
                    <th className="p-3 text-sm font-semibold text-gray-700">
                      Disponível
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {livro.tiragens.map((tiragem, idx) => (
                    <tr
                      key={idx}
                      className="border-t border-gray-200 transition-colors hover:bg-blue-50"
                    >
                      <td className="p-3 text-sm font-medium text-gray-800">
                        {tiragem.isbn}
                      </td>
                      <td className="p-3 text-sm">
                        {tiragem.disponivel ? (
                          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                            Sim
                          </span>
                        ) : (
                          <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                            Não
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex h-32 flex-col items-center justify-center rounded-xl bg-gray-50 p-6 text-center">
              <p className="mb-2 text-lg font-medium text-gray-600">
                Sem tiragens
              </p>
              <p className="text-sm text-gray-500">
                Este livro não possui tiragens registradas.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
