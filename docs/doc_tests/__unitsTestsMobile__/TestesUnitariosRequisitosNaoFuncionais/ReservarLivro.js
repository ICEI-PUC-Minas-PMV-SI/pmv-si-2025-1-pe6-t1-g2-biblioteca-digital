// Etapa 2 - Testes para ReservarLivro.js (tabela de decisão + equivalência)
//Você pode testar:
//Livro disponível + usuário autenticado → reserva permitida
//Livro já reservado → botão desabilitado
//Livro indisponível → botão desabilitado

it('desativa botão "Reservar" se o livro não estiver disponível', () => {
  const livroIndisponivel = {
    id: 1,
    livro_titulo: 'Livro Teste',
    disponivel: false,
  };

  const { getByText } = renderItemCard(livroIndisponivel);
  const botao = getByText(/Reservado/i);
  expect(botao.props.accessibilityState.disabled).toBe(true);
});