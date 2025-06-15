//Etapa 4: Testes para Historico.js
//Requisito: RF-006
//Casos de Teste: CT-026, CT-028

import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Historico from '../screens/Historico';
import { useAuth } from '../contexts/AuthContext';

global.fetch = jest.fn();

jest.mock('../contexts/AuthContext');

describe('Historico - RF006', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useAuth.mockReturnValue({
      alunoId: 1,
      accessToken: 'fake-token',
    });
  });

  it('CT-026: Exibe histórico com empréstimos devolvidos', async () => {
    fetch.mockResolvedValueOnce({
      json: async () => [
        { id: 1, titulo_livro: 'Dom Casmurro', tiragem: 3, dt_devolucao: '2024-05-10' },
        { id: 2, titulo_livro: 'Livro Atual', tiragem: 1, dt_devolucao: null }, // deve ser ignorado
      ]
    });

    const { getByText, queryByText } = render(<Historico />);

    await waitFor(() => {
      expect(getByText('Dom Casmurro')).toBeTruthy();
      expect(queryByText('Livro Atual')).toBeNull();
    });
  });

  it('CT-028: Exibe mensagem de histórico vazio', async () => {
    fetch.mockResolvedValueOnce({ json: async () => [] });

    const { getByText } = render(<Historico />);
    await waitFor(() => {
      expect(getByText('Nenhum histórico encontrado.')).toBeTruthy();
    });
  });
});