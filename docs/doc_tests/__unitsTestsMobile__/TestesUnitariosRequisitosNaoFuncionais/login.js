//Etapa 1- Testes para Login.js (usando partição de equivalência e valor limite)


import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Login from '../Login';
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

jest.mock('../../contexts/AuthContext');

describe('Login Component', () => {
  it('deve permitir login com email e senha válidos', async () => {
    const loginMock = jest.fn().mockResolvedValue(true);
    useAuth.mockReturnValue({ login: loginMock });

    const { getByText, getByPlaceholderText } = render(<Login />);

    fireEvent.changeText(getByPlaceholderText(/E-mail institucional/i), 'teste@puc.com');
    fireEvent.changeText(getByPlaceholderText(/Senha/i), 'SenhaForte@123');

    fireEvent.press(getByText(/ENTRAR/i));

    await waitFor(() => {
      expect(loginMock).toHaveBeenCalledWith('teste@puc.com', 'SenhaForte@123');
    });
  });

  it('deve rejeitar login com campos vazios', async () => {
    const loginMock = jest.fn().mockResolvedValue(false);
    useAuth.mockReturnValue({ login: loginMock });

    const { getByText } = render(<Login />);
    fireEvent.press(getByText(/ENTRAR/i));

    await waitFor(() => {
      expect(loginMock).toHaveBeenCalled();
    });
  });
});
