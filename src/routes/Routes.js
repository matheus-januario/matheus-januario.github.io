import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BuySellStock from '../pages/BuySellStock';
import DepositWithdraw from '../pages/DepositWithdraw';
import Login from '../pages/Login';
import StockList from '../pages/StockList';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>

        <Route exact path="/stocklist" element={<StockList />}></Route>

        <Route exact path="/buysell" element={<BuySellStock />}></Route>

        <Route exact path="/depositwithdraw" element={<DepositWithdraw />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
