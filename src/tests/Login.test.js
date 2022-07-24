import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ContextStock from '../context/ContextStock';
import Login from '../pages/Login';
import StockList from '../pages/StockList';

describe('Teste do componente Login.js', () => {
  test('01 - Os inputs de Email e Senha, e o botão de Login aparecem na tela', () => {
    render(
      <ContextStock.Provider value={null}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextStock.Provider>
    );

    const loginBtn = screen.getByTestId("login-btn")
    expect(loginBtn).toBeInTheDocument();
    const loginEmailInp = screen.getByTestId("input-email")
    expect(loginEmailInp).toBeInTheDocument();
    const loginPsswInp = screen.getByTestId("input-pssw")
    expect(loginPsswInp).toBeInTheDocument();
  });

  test('02 - Validação de Email e Senha funciona', () => {
    render(
      <ContextStock.Provider value={null}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />}>
              <Route exact path="/stocklist" element={<StockList />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextStock.Provider>
    );

    const loginBtn = screen.getByTestId("login-btn")
    const loginEmailInp = screen.getByTestId("input-email")
    const loginPsswInp = screen.getByTestId("input-pssw")

    fireEvent.change(loginEmailInp, { target: { value: 'lalala@lalala.com' } });
    expect(loginEmailInp.value).toBe('lalala@lalala.com');
    fireEvent.change(loginPsswInp, { target: { value: '123456' } });
    expect(loginPsswInp.value).toBe('123456');
    expect(loginBtn).toHaveProperty("disabled", false);

    fireEvent.click(loginBtn);
    expect(screen.getByText(/lalala@lalala.com/i)).toBeInTheDocument();
  })
});
