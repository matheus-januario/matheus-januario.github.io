import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ContextStock from "../context/ContextStock";
import ButtonDepRet from "./ButtonDepRet";

function HeaderBalance() {
  const { myBalance } = useContext(ContextStock);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="meu-saldo">Meu Saldo: <br/>R${parseFloat(myBalance).toFixed(2)}</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <ButtonDepRet>
          </ButtonDepRet>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderBalance;
