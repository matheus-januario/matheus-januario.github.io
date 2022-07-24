import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";


function ButtonDepRet() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/depositwithdraw');
  };

  return (
    <div>
      <Button
        variant="success"
        type="button"
        data-testid="btn-depwit"
        onClick={handleClick}
      >Depósito / Retirada</Button>
    </div>
  );
};

export default ButtonDepRet;
