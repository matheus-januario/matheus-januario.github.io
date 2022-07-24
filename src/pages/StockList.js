import React, { useContext, useEffect } from 'react';
import ContextStock from "../context/ContextStock";
import MyStockCard from "../components/MyStockCard";
import AvStockCard from "../components/AvStockCard";
import HeaderEmail from '../components/HeaderEmail';
import HeaderBalance from '../components/HeaderBalance';
import ButtonDepRet from '../components/ButtonDepRet';
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ButtonSair from '../components/ButtonSair';

function StockList() {
  const { myStocks, avStocks, getStocks } = useContext(ContextStock);

  useEffect(() => {
    getStocks(); // eslint-disable-next-line
  }, []);

  if (myStocks.length === 0) {
    return (
      <section>
        <div className="wrap-box">
          <HeaderEmail />
          <ButtonSair />
        </div>
        <HeaderBalance />
        <Navbar bg="dark" className="margin-top-2" variant="dark">
          <Container>
            <Navbar.Brand>Suas Ações:</Navbar.Brand>
            <Navbar.Text>Você ainda não possui ações</Navbar.Text>
          </Container>
        </Navbar>
        <br />
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Ações Disponíveis para Investir:</Navbar.Brand>
          </Container>
        </Navbar>

        <div className="buy-stocks-table">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Ação</th>
                {/* <th>Qtde.</th> */}
                <th>Valor (BRL)</th>
                <th>Negociar</th>
              </tr>
            </thead>
            <tbody>
              {avStocks.map((stock) => (
                <AvStockCard key={stock.id} stock={stock} />
              ))}
            </tbody>
          </Table>
        </div>

        <ButtonDepRet />
      </section>
    );
  } else {
    return (
      <section>
        <div className="wrap-box">
          <HeaderEmail />
          <ButtonSair />
        </div>
        <HeaderBalance />
        <Navbar bg="dark" className="margin-top-2" variant="dark">
          <Container>
            <Navbar.Brand>Minhas Ações:</Navbar.Brand>
          </Container>
        </Navbar>

        <div className="my-stocks-table">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Ação</th>
                <th>Qtde.</th>
                <th>Valor (BRL)</th>
                <th>Negociar</th>
              </tr>
            </thead>
            <tbody>
              {myStocks.map((stock) => (
                <MyStockCard key={stock.id} stock={stock} />
              ))}
            </tbody>
          </Table>
        </div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Ações Disponíveis para Investir:</Navbar.Brand>
          </Container>
        </Navbar>
        <div className="av-stocks-table">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Ação</th>
                {/* <th>Qtde.</th> */}
                <th>Valor (BRL)</th>
                <th>Negociar</th>
              </tr>
            </thead>
            <tbody>
              {avStocks.map((stock) => (
                <AvStockCard key={stock.id} stock={stock} />
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    );
  }

}

export default StockList;
