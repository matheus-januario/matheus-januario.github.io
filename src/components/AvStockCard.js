import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router";
import ContextStock from "../context/ContextStock";
import Button from 'react-bootstrap/Button';

function AvStockCard({ stock }) {
  const { setNegotiatedStock } = useContext(ContextStock);
  const navigate = useNavigate();

  const handleClick = () => {
    setNegotiatedStock(stock)
    navigate('/buysell');
  };

  return (
    <tr>
      <th>
        {stock.symbol}
      </th>
      <th>
        {stock.priceBRL}
      </th>
      <th className="cv-button">
        <Button
          variant="light"
          size="sm"
          type="button"
          onClick={handleClick}
        >Comprar</Button>
      </th>
    </tr>
  );
}

AvStockCard.propTypes = {
  stock: PropTypes.shape({
    "id": PropTypes.number,
    "name": PropTypes.string,
    "symbol": PropTypes.string,
    "priceBRL": PropTypes.number,
    "quantity": PropTypes.number
  }),
}

export default AvStockCard;
