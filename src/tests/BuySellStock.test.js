import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import BuySellStock from '../pages/BuySellStock';
import ContextStock from '../context/ContextStock';

describe('Teste do componente BuySellStock.js', () => {
  let myBalance = { myBalance: 1000 };
  let inputBuy = 0;
  let inputSell = 0;
  let negotiatedStock = { negotiatedStock: [] };
  let avStocks = {
    avStocks: [
      { "id": 2, "name": "Petrobras", "symbol": "PETR3", "priceBRL": 31.11, "quantity": 0 },
      { "id": 3, "name": "Itau Unibanco", "symbol": "ITUB4", "priceBRL": 22.85, "quantity": 0 },
      { "id": 4, "name": "AMBEV", "symbol": "ABEV3", "priceBRL": 14.49, "quantity": 0 },
      { "id": 5, "name": "Banco Bradesco", "symbol": "BBDC4", "priceBRL": 16.65, "quantity": 0 },
      { "id": 6, "name": "WEG S.A", "symbol": "WEGE3", "priceBRL": 26.22, "quantity": 0 },
      { "id": 7, "name": "BTG Pactual", "symbol": "BPAC11", "priceBRL": 21.56, "quantity": 0 },
      { "id": 8, "name": "Banco Santander", "symbol": "SANB11", "priceBRL": 27.43, "quantity": 0 },
      { "id": 9, "name": "Banco do Brasil", "symbol": "BBAS3", "priceBRL": 33.75, "quantity": 0 },
      { "id": 10, "name": "Rede Sao Luiz", "symbol": "RDOR3", "priceBRL": 26.36, "quantity": 0 },
      { "id": 11, "name": "B3", "symbol": "B3SA3", "priceBRL": 10.27, "quantity": 0 },
      { "id": 12, "name": "Telefonica", "symbol": "VIVT3", "priceBRL": 47.01, "quantity": 0 },
      { "id": 13, "name": "Hapvida", "symbol": "HAPV3", "priceBRL": 6.15, "quantity": 0 },
      { "id": 14, "name": "JBS", "symbol": "JBSS3", "priceBRL": 29.8, "quantity": 0 },
      { "id": 15, "name": "Suzano S.A.", "symbol": "SUZB3", "priceBRL": 43.87, "quantity": 0 }
    ]
  };
  let myStocks = { myStocks: [{ "id": 1, "name": "Vale S.A.", "symbol": "VALE3", "priceBRL": 68.96, "quantity": 0 }] };

  function setMyBalance(a) {
    myBalance = { myBalance: a }
    return;
  }

  function setInputBuy(b) {
    inputBuy = { inputBuy: b }
    return;
  }

  function setInputSell(c) {
    inputSell = { inputSell: c }
    return;
  }

  function setNegotiatedStock(d) {
    negotiatedStock = { negotiatedStock: d }
    return;
  }

  function setAvStocks(e) {
    avStocks = { avStocks: e }
    return;
  }

  function setMyStocks(f) {
    myStocks = { myStocks: f }
    return;
  }

  const contextValue = {
    myBalance,
    inputBuy,
    inputSell,
    negotiatedStock,
    avStocks,
    myStocks,
    setMyBalance,
    setInputBuy,
    setInputSell,
    setNegotiatedStock,
    setAvStocks,
    setMyStocks
  }

  test('01 - Usuário aparece na tela', () => {
    render(
      <ContextStock.Provider value={contextValue}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<BuySellStock />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextStock.Provider>
    );

    const user = screen.getByTestId("user-email");
    expect(user).toBeInTheDocument();
    expect(user).toHaveTextContent(/usuário/i);
  });

  test('02 - Meu Saldo aparece na tela', () => {
    render(
      <ContextStock.Provider value={contextValue}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<BuySellStock />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextStock.Provider>
    );

    const sectionPage = screen.getByTestId("section-page");
    expect(sectionPage).toBeInTheDocument();

    const navHeader = screen.getByTestId("nav-header");
    expect(navHeader).toBeInTheDocument();
    const navHeaderTxt = screen.getByTestId("nav-header-txt");
    expect(navHeaderTxt).toBeInTheDocument();
    expect(navHeaderTxt).toHaveTextContent(/meu saldo/i);

  });

  test('03 - Tabela de Ações aparece na tela', () => {
    render(
      <ContextStock.Provider value={contextValue}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<BuySellStock />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextStock.Provider>
    );

    const stockTable = screen.getByTestId("stock-table");
    expect(stockTable).toBeInTheDocument();
    const stockTableSym = screen.getByTestId("stock-table-s");
    expect(stockTableSym).toHaveTextContent(/ação/i)
    const stockTableQua = screen.getByTestId("stock-table-q");
    expect(stockTableQua).toHaveTextContent(/qtde/i)
    const stockTableVal = screen.getByTestId("stock-table-v");
    expect(stockTableVal).toHaveTextContent(/valor/i)
    const stockTableQuaD = screen.getByTestId("stock-table-dq");
    expect(stockTableQuaD).toHaveTextContent(/informe a quantidade/i)
  });

  test('04 - Inputs e botões aparecem na tela', () => {
    render(
      <ContextStock.Provider value={contextValue}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<BuySellStock />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextStock.Provider>
    );

    const containerInputB = screen.getByTestId("cont-inp-buy");
    expect(containerInputB).toBeInTheDocument();
    const buttonBuy = screen.getByTestId("btn-buy");
    expect(buttonBuy).toBeInTheDocument();
    expect(buttonBuy).toHaveTextContent(/comprar/i);
    const containerInputS = screen.getByTestId("cont-inp-sell");
    expect(containerInputS).toBeInTheDocument();
    const buttonSell = screen.getByTestId("btn-sell");
    expect(buttonSell).toBeInTheDocument();
    expect(buttonSell).toHaveTextContent(/vender/i);
  });

  test('05 - Botão Voltar aparece na tela', () => {
    render(
      <ContextStock.Provider value={contextValue}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<BuySellStock />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextStock.Provider>
    );

    const btnReturn = screen.getByTestId("btn-return");
    expect(btnReturn).toBeInTheDocument();
    expect(btnReturn).toHaveTextContent(/voltar/i);
  });
});
