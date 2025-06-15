//Etapa 5: Testes para MeusEmprestimos.js
//Requisito: RF-004
//Cobertura complementar: botão "Devolver"

import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import MeusEmprestimos from '../screens/MeusEmprestimos';
import { useAuth } from '../contexts/AuthContext';

global.fetch = jest.fn();

jest.mock('../contexts/AuthContext');

describe('MeusEmprestimos - RF004', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useAuth.mockReturnValue({
      alunoId: 1,
      accessToken: 'token123'
    });
  });

  it('Renderiza lista de empréstimos ativos', async () => {
    fetch.mockResolvedValueOnce({
      headers: { get: () => 'application/json' },
      json: async () => [
        { id: 1, titulo_livro: 'Dom Casmurro', dt_emprestimo: '2024-06-01', previsao_devolucao: '2024-06-15', dt_devolucao: null, tiragem: 1 },
      ]
    });

    const { getByText } = render(<MeusEmprestimos />);
    await waitFor(() => {
      expect(getByText('Dom Casmurro')).toBeTruthy();
      expect(getByText('Devolver')).toBeTruthy();
    });
  });
});