import React, { useContext, useEffect, useState } from "react";
import HeaderEmail from "../components/HeaderEmail";
import ButtonVoltar from "../components/ButtonVoltar";
import ContextStock from "../context/ContextStock";
import { useNavigate } from "react-router";
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BuySellStock() {
  const [inputBuy, setInputBuy] = useState(0);
  const [inputSell, setInputSell] = useState(0);
  const navigate = useNavigate();

  const {
    myBalance,
    setMyBalance,
    negotiatedStock,
    setNegotiatedStock,
    avStocks,
    setAvStocks,
    myStocks,
    setMyStocks
  } = useContext(ContextStock);

  const [sellDisabled, setSellDisabled] = useState(true);

  const inputBuyMul = parseFloat((inputBuy * (negotiatedStock.priceBRL)).toFixed(2));
  const inputSellMul = parseFloat((inputSell * (negotiatedStock.priceBRL)).toFixed(2));

  const handleSellDisabled = () => {
    if (negotiatedStock.quantity === 0) {
      setSellDisabled(true);
      return;
    }
    setSellDisabled(false);
  };

  useEffect(() => {
    handleSellDisabled(); // eslint-disable-next-line
  }, []);

  const handleBuy = () => {
    if (inputBuy > 0) {
      if ((myBalance - (inputBuy * negotiatedStock.priceBRL)) < 0) {
        alert('Saldo insuficiente');
        document.getElementById("buy-input").value = "";
        document.getElementById("sell-input").value = "";
        setInputBuy(0);
      } else {
        const myBalanceHCB = parseFloat(myBalance) - (parseFloat(inputBuy) * parseFloat(negotiatedStock.priceBRL));
        setMyBalance(myBalanceHCB);
        const newQuantityBuy = parseFloat(inputBuy) + parseFloat(negotiatedStock.quantity);
        negotiatedStock.quantity = newQuantityBuy;
        const indexB = myStocks.findIndex(myStockB => myStockB.id === negotiatedStock.id);

        if (indexB === -1) {
          const newMyStocksB = myStocks.concat(negotiatedStock);
          setMyStocks(newMyStocksB);
          alert("Compra feita com sucesso!");
          setInputBuy(0);
          setInputSell(0);
          setNegotiatedStock({});
          navigate('/stocklist');
        } else {
          const newAvStocksB = avStocks.filter(stock => stock.id !== negotiatedStock.id);
          setAvStocks(newAvStocksB);
          alert("Compra feita com sucesso!");
          setInputBuy(0);
          setInputSell(0);
          setNegotiatedStock({});
          navigate('/stocklist');
        }
      }
    } else {
      alert("Informe a quantidade de ações que deseja comprar");
      document.getElementById("buy-input").value = "";
      document.getElementById("sell-input").value = "";
    }

  };

  const handleSell = () => {
    if (inputSell > 0) {
      const newQuantitySell = parseFloat(negotiatedStock.quantity) - parseFloat(inputSell);

      if (newQuantitySell < 0) {
        alert('Acões insuficientes');
        document.getElementById("buy-input").value = "";
        document.getElementById("sell-input").value = "";
        setInputSell(0);
      } else if (newQuantitySell === 0) {
        const newAvStocksS = avStocks.concat(negotiatedStock);
        setAvStocks(newAvStocksS);
        const myBalanceHCS = parseFloat(myBalance) + (parseFloat(inputSell) * parseFloat(negotiatedStock.priceBRL));
        setMyBalance(myBalanceHCS);
        alert("Venda feita com sucesso!");
        setInputBuy(0);
        setInputSell(0);
        setNegotiatedStock({});
        const newMyStocksS = myStocks.filter(stock => stock.id !== negotiatedStock.id);
        setMyStocks(newMyStocksS);
        navigate('/stocklist');
      } else {
        negotiatedStock.quantity = newQuantitySell;
        alert("Venda feita com sucesso!");
        setInputBuy(0);
        setInputSell(0);
        setNegotiatedStock({});
        const myBalanceHCS = parseFloat(myBalance) + (parseFloat(inputSell) * parseFloat(negotiatedStock.priceBRL));
        setMyBalance(myBalanceHCS);
        navigate('/stocklist');
      }
    } else {
      alert("Informe a quantidade de ações que deseja vender");
      document.getElementById("buy-input").value = "";
      document.getElementById("sell-input").value = "";
    }
  };

  const handleChangeInpBuy = ({ target: { value } }) => {
    setInputBuy(value);
    setInputSell(0);
    document.getElementById("sell-input").value = "";
  };

  const handleChangeInpSell = ({ target: { value } }) => {
    setInputSell(value);
    setInputBuy(0);
    document.getElementById("buy-input").value = "";
  };

  return (
    <section data-testid="section-page">
      <HeaderEmail />

      <Navbar data-testid="nav-header" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Negociar Ações: <br />{negotiatedStock.name}</Navbar.Brand>
          <Navbar.Text data-testid="nav-header-txt" className="meu-saldo">Meu Saldo: <br />R${parseFloat(myBalance).toFixed(2)}</Navbar.Text>
        </Container>
      </Navbar>

      <Table data-testid="stock-table" className="buy-stocks-table" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th data-testid="stock-table-s"> Ação </th>
            <th data-testid="stock-table-q"> Qtde. </th>
            <th data-testid="stock-table-v"> Valor </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{negotiatedStock.symbol}</th>
            <th data-testid="stock-table-dq">{inputBuy || inputSell || 'Informe a quantidade'}</th>
            <th>R$ {inputBuyMul || inputSellMul}</th>
          </tr>
        </tbody>
      </Table>

      <Container data-testid="cont-inp-buy" className="displaytog marg-top-bot">
        <Form.Control
          id="buy-input"
          type="number"
          placeholder="Informe a quantidade"
          onChange={handleChangeInpBuy}
        />

        <Button
          data-testid="btn-buy"
          type="button"
          variant="success"
          className="half-sc-btn"
          onClick={handleBuy}
          id="buy"
        >Comprar
        </Button>
      </Container>
      {/* */}
      <Container data-testid="cont-inp-sell" className="displaytog marg-top-bot">
        <Form.Control
          id="sell-input"
          type="number"
          placeholder="Informe a quantidade"
          onChange={handleChangeInpSell}
          disabled={sellDisabled}
        />

        <Button
          data-testid="btn-sell"
          type="button"
          variant="success"
          className="half-sc-btn"
          onClick={handleSell}
          id="sell"
          disabled={sellDisabled}
        >Vender
        </Button>
      </Container>

      <Container className="marg-top-bot">
        <ButtonVoltar />
      </Container>
    </section>
  )
};

export default BuySellStock;
