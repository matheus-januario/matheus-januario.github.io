import {fireEvent, render, screen} from '@testing-library/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import Login from '../pages/Login'
import StockList from '../pages/StockList';
// import { App } from '../App'
import { AppRoutes } from '../routes/Routes'
// import {App, LocationDisplay} from '../App'
// import {BrowserRouter } from 'react-router-dom'
// import {BrowserRouter, MemoryRouter} from 'react-router-dom'

//REF https://stackoverflow.com/questions/68145766/react-testing-library-router-tests-not-passing-when-following-rtls-own-guide

test('If the Login page renders', () => {
  render(
    <AppRoutes>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>

          <Route exact path="/stocklist" element={<StockList />}></Route>
        </Routes>
      </Router>
    </AppRoutes>
  );
  
  const tbl = screen.getByTestId("table-depwit")
  expect(tbl).toBeInTheDocument();
  
});
