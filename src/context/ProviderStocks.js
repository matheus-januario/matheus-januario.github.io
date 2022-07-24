import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { myStocksData } from '../data/Data';
import fetchStocks from '../api/stockAPI';
import ContextStock from './ContextStock';

function ProviderStocks({ children }) { // props.children
  const [myStocks, setMyStocks] = useState([]);
  const [avStocks, setAvStocks] = useState([]);
  const [myBalance, setMyBalance] = useState([]);
  // const [inputDeposit, setInputDeposit] = useState([]); // depwit
  // const [inputWithdraw, setInputWithdraw] = useState([]); // depwit
  // const [inputBuy, setInputBuy] = useState([]); // buysell
  // const [inputSell, setInputSell] = useState([]); // buysell
  const [negotiatedStock, setNegotiatedStock] = useState([]);

  useEffect(() => {
    setMyStocks(myStocksData);
    setMyBalance(parseFloat(1000).toFixed(2));
    // setInputDeposit(0);
    // setInputWithdraw(0);
    // setInputBuy(0);
    // setInputSell(0);
    setNegotiatedStock({})
  }, []);

  async function getStocks() {
    const stocksResponse = await fetchStocks();
    const filteredResponse = stocksResponse.filter(stock => !myStocks.map(b => b.id).includes(stock.id))
    setAvStocks(filteredResponse);
  };

  const contextValue = {
    getStocks,
    myStocks,
    setMyStocks,
    avStocks,
    setAvStocks,
    myBalance,
    setMyBalance,
    // inputDeposit,
    // setInputDeposit,
    // inputWithdraw,
    // setInputWithdraw,
    // inputBuy,
    // setInputBuy,
    // inputSell,
    // setInputSell,
    negotiatedStock,
    setNegotiatedStock
  }

  return (
    <ContextStock.Provider value={contextValue}> {/* disponibilizando esse estado para o contexto */}
      {children}
    </ContextStock.Provider>
  );
};

ProviderStocks.propTypes = {
  children: PropTypes.element,
}

export default ProviderStocks;
