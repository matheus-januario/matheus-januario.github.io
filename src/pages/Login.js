import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import { addEmailUser, addDateLog } from '../services/localStorage';
import HeaderEmail from '../components/HeaderEmail';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = () => {
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return validEmail.test(email);
    };

    const verifyPassword = () => {
      const MIN_LENGTH_PASSWD = 6;
      return password.length >= MIN_LENGTH_PASSWD;
    };

    const handleButtonDisable = () => {
      if (verifyEmail() && verifyPassword()) {
        setIsButtonDisabled(false);
        return;
      }
      setIsButtonDisabled(true);
    };

    handleButtonDisable();
  }, [email, password]);

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleLogin = () => {
    addEmailUser(email);
    const date = new Date();
    addDateLog(date);
    navigate('/stocklist');
  };

  return (
    <section>
      <HeaderEmail />
      <form>
        <Container className="marg-to marg-top-bot">
          <Form.Control 
            type="email"
            id="email-input"
            placeholder="Email"
            onChange={ handleEmail }
            data-testid="input-email"
            />
        </Container>
        <Container className="marg-top-bot">
          <Form.Control 
            type="password"
            id="password-input"
            placeholder="Senha"
            onChange={ handlePassword }
            data-testid="input-pssw"
            />
        </Container>
        <div className="margin-five d-grid gap-2">
          <Button
            variant="success"
            size="lg"
            type="button"
            onClick={ handleLogin }
            disabled={ isButtonDisabled }
            data-testid="login-btn"
          >
            Entrar
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Login;
