//Etapa 2: Testes para BuscarLivros.js
//Requisito: RF-003
//Casos de Teste: CT-011, CT-012, CT-014

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import BuscarLivros from '../screens/BuscarLivros';
import api from '../services/api';

jest.mock('../services/api');

describe('BuscarLivros - RF003', () => {
  const mockLivros = [
    { id: 1, livro_titulo: 'Dom Casmurro', isbn: '111', disponivel: true },
    { id: 2, livro_titulo: 'Capitães da Areia', isbn: '222', disponivel: false },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    api.get.mockResolvedValue({ data: mockLivros });
  });

  it('CT-011: Exibe livro com título exato', async () => {
    const { getByPlaceholderText, getByText } = render(<BuscarLivros />);

    await waitFor(() => getByText('Dom Casmurro'));

    fireEvent.changeText(getByPlaceholderText('Buscar livro por título'), 'Dom Casmurro');

    expect(getByText('Dom Casmurro')).toBeTruthy();
  });

  it('CT-012: Exibe resultado com título parcial', async () => {
    const { getByPlaceholderText, getByText } = render(<BuscarLivros />);

    await waitFor(() => getByText('Dom Casmurro'));

    fireEvent.changeText(getByPlaceholderText('Buscar livro por título'), 'Dom');

    expect(getByText('Dom Casmurro')).toBeTruthy();
  });

  it('CT-014: Exibe mensagem quando nenhum livro é encontrado', async () => {
    const { getByPlaceholderText, getByText } = render(<BuscarLivros />);

    fireEvent.changeText(getByPlaceholderText('Buscar livro por título'), 'LivroInexistente123');

    await waitFor(() => {
      expect(getByText('Nenhum livro encontrado.')).toBeTruthy();
    });
  });
});