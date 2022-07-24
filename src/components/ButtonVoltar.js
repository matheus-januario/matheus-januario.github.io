import React from "react";
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router";


function ButtonVoltar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/stocklist');
  };

  return (
    <div>
      <Button
        data-testid="btn-return"
        type="button"
        className="half-sc-btn"
        variant="secondary"
        onClick={handleClick}
      >Voltar</Button>
    </div>
  );
};

export default ButtonVoltar;
