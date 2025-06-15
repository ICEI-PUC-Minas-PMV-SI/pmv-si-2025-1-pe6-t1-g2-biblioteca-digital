//Etapa 3: Testes para ReservarLivro.js
//Requisito: RF-004
//Casos de Teste: CT-016, CT-017

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ReservarLivro from '../screens/ReservarLivro';
import { useAuth } from '../contexts/AuthContext';

global.fetch = jest.fn();

jest.mock('../contexts/AuthContext');

describe('ReservarLivro - RF004', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useAuth.mockReturnValue({
      alunoId: 1,
      accessToken: 'fake-token',
    });

    fetch.mockResolvedValueOnce({
      text: async () => JSON.stringify([
        { id: 1, livro_titulo: 'Dom Casmurro', autor: 'Machado', isbn: '123', ano_publicacao: 1899, disponivel: true },
        { id: 2, livro_titulo: 'Livro Indisponível', disponivel: false }
      ])
    });
  });

  it('CT-016: Exibe botão "Reservar" para livro disponível', async () => {
    const { getByText } = render(<ReservarLivro />);
    await waitFor(() => getByText('Reservar'));
    expect(getByText('Reservar')).toBeTruthy();
  });

  it('CT-017: Exibe botão "Reservado" para livro indisponível', async () => {
    const { getAllByText } = render(<ReservarLivro />);
    await waitFor(() => getAllByText('Reservado'));
    expect(getAllByText('Reservado').length).toBeGreaterThan(0);
  });
});