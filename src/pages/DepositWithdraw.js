import React, { useContext, useState } from 'react';
import HeaderEmail from "../components/HeaderEmail";
import ButtonVoltar from "../components/ButtonVoltar";
import ContextStock from "../context/ContextStock";
import { useNavigate } from "react-router";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DepositWithdraw() {
  const [inputDeposit, setInputDeposit] = useState(0);
  const [inputWithdraw, setInputWithdraw] = useState(0);
  const navigate = useNavigate();

  const {
    myBalance,
    setMyBalance,
  } = useContext(ContextStock);

  const handleDeposit = () => {
    if (inputDeposit > 0) {
      const myBalanceDepWit = parseFloat(myBalance) + (parseFloat(inputDeposit));
      setMyBalance(myBalanceDepWit);
      alert("Depósito feito com sucesso!");

      setInputDeposit(0);
      setInputWithdraw(0);
      navigate('/stocklist');
    } else {
      alert("Informe o valor do depósito");
      document.getElementById("dep-input").value = "";
      document.getElementById("wit-input").value = "";
    }
  };

  const handleWithdraw = () => {
    if (inputWithdraw > 0) {
      if ((parseFloat(myBalance) - parseFloat(inputWithdraw)) < 0) {
        alert('Saldo insuficiente');
        setInputWithdraw(0);
        document.getElementById("dep-input").value = "";
        document.getElementById("wit-input").value = "";
      } else {
        const myBalanceDepWit = parseFloat(myBalance) - (parseFloat(inputWithdraw));
        setMyBalance(myBalanceDepWit);
        alert("Retirada feita com sucesso!");

        setInputDeposit(0);
        setInputWithdraw(0);
        navigate('/stocklist');
      }
    } else {
      alert("Informe o valor da retirada");
      document.getElementById("dep-input").value = "";
      document.getElementById("wit-input").value = "";
    }
  };

  const handleChangeInpDep = ({ target: { value } }) => {
    setInputDeposit(value);
    setInputWithdraw(0);
    document.getElementById("wit-input").value = "";

  };

  const handleChangeInpWit = ({ target: { value } }) => {
    setInputWithdraw(value);
    setInputDeposit(0);
    document.getElementById("dep-input").value = "";
  };

  return (
    <section>
      <HeaderEmail />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand data-testid="nav-header-txt" className="meu-saldo">Meu Saldo: <br/>R${parseFloat(myBalance).toFixed(2)}</Navbar.Brand>
        </Container>
      </Navbar>

      <Container data-testid="cont-inp-deposit" className="displaytog marg-top-bot">
        <Form.Control
          id="dep-input"
          type="number"
          placeholder="Valor do depósito"
          onChange={handleChangeInpDep}
        />

        <Button
          data-testid="btn-deposit"
          type="button"
          variant="success"
          className="half-sc-btn"
          onClick={handleDeposit}
          id="btn-dep"
        >Depositar
        </Button>
      </Container>

      {/* */}

      <Container data-testid="cont-inp-withdraw" className="displaytog marg-top-bot">
        <Form.Control
          id="wit-input"
          type="number"
          placeholder="Valor da retirada"
          onChange={handleChangeInpWit}
        />

        <Button
          data-testid="btn-withdraw"
          type="button"
          variant="success"
          className="half-sc-btn"
          onClick={handleWithdraw}
          id="btn-wit"
        >Retirar
        </Button>
      </Container>

      <Container className="marg-top-bot">
        <ButtonVoltar />
      </ Container>

    </section>
  )
};

export default DepositWithdraw;
