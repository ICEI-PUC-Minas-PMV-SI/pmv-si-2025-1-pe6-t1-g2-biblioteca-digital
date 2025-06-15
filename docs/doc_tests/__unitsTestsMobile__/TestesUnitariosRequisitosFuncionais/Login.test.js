//Etapa 1:Testes para Login.js (RF-001 – CT-004 e CT-005)
//Este teste cobre:
// Login bem-sucedido com credenciais válidas e Falha no login com credenciais inválidas

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Login from '../screens/Login';
import { useAuth } from '../contexts/AuthContext';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

jest.mock('../contexts/AuthContext');

describe('Login - RF001', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('CT-004: Realiza login com credenciais válidas', async () => {
    const loginMock = jest.fn().mockResolvedValue(true);
    const navigateMock = jest.fn();

    useAuth.mockReturnValue({
      login: loginMock,
    });

    const { getByPlaceholderText, getByText } = render(<Login />);

    fireEvent.changeText(getByPlaceholderText('E-mail institucional'), 'ana.silva@email.com');
    fireEvent.changeText(getByPlaceholderText('Senha'), 'MinhaSenh@123');
    fireEvent.press(getByText('ENTRAR'));

    await waitFor(() => {
      expect(loginMock).toHaveBeenCalledWith('ana.silva@email.com', 'MinhaSenh@123');
    });
  });

  it('CT-005: Exibe erro ao fazer login com credenciais inválidas', async () => {
    const loginMock = jest.fn().mockResolvedValue(false);
    useAuth.mockReturnValue({
      login: loginMock,
    });

    const { getByText } = render(<Login />);

    fireEvent.press(getByText('ENTRAR'));

    await waitFor(() => {
      expect(loginMock).toHaveBeenCalled();
      expect(getByText('E-mail ou senha inválidos.')).toBeTruthy();
    });
  });
});