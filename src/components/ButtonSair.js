import React from "react";
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router";


function ButtonSair() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <Button
        data-testid="btn-logout"
        type="button"
        className="logout-btn"
        variant="secondary"
        onClick={handleClick}
      >Sair</Button>
    </div>
  );
};

export default ButtonSair;
