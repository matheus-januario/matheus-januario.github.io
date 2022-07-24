import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import DepositWithdraw from '../pages/DepositWithdraw';
import ContextStock from '../context/ContextStock';

describe('Teste do componente DepositWithdraw.js', () => {
  let myBalance = { myBalance: 1000 };
  let depositSelected = { depositSelected: true };
  let inputDepWit = { inputDepWit: 50 };

  function setMyBalance(a) {
    myBalance = { myBalance: a }
    return;
  }

  function setDepositSelected(b) {
    depositSelected = { depositSelected: b }
    return;
  }

  function setInputDepWit(c) {
    inputDepWit = { inputDepWit: c }
    return;
  }

  const contextValue = {
    myBalance,
    depositSelected,
    inputDepWit,
    setMyBalance,
    setDepositSelected,
    setInputDepWit
  }

  test('01 - Inputs e botões aparecem na tela', () => {
    render(
      <ContextStock.Provider value={contextValue}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DepositWithdraw />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextStock.Provider>
    );

    const containerInputDeposit = screen.getByTestId("cont-inp-deposit");
    expect(containerInputDeposit).toBeInTheDocument();
    const buttonDeposit = screen.getByTestId("btn-deposit");
    expect(buttonDeposit).toBeInTheDocument();
    expect(buttonDeposit).toHaveTextContent(/depositar/i);
    const containerInputWithdraw = screen.getByTestId("cont-inp-withdraw");
    expect(containerInputWithdraw).toBeInTheDocument();
    const buttonWithdraw = screen.getByTestId("btn-withdraw");
    expect(buttonWithdraw).toBeInTheDocument();
    expect(buttonWithdraw).toHaveTextContent(/retirar/i);
  });

  test('02 - Meu Saldo aparece na tela', () => {
    render(
      <ContextStock.Provider value={contextValue}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DepositWithdraw />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextStock.Provider>
    );

    const navHeaderTxt = screen.getByTestId("nav-header-txt");
    expect(navHeaderTxt).toBeInTheDocument();
    expect(navHeaderTxt).toHaveTextContent(/meu saldo/i);
  });

  test('03 - Usuário aparece na tela', () => {
    render(
      <ContextStock.Provider value={contextValue}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DepositWithdraw />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextStock.Provider>
    );

    const user = screen.getByTestId("user-email");
    expect(user).toBeInTheDocument();
    expect(user).toHaveTextContent(/usuário/i);
  });

  test('04 - Botão Voltar aparece na tela', () => {
    render(
      <ContextStock.Provider value={contextValue}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DepositWithdraw />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextStock.Provider>
    );

    const btnReturn = screen.getByTestId("btn-return");
    expect(btnReturn).toBeInTheDocument();
    expect(btnReturn).toHaveTextContent(/voltar/i);
  });
});
