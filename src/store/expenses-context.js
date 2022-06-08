/* eslint-disable no-unused-vars */
import React from "react";

const ExpensesContext = React.createContext({
  expenses: [],
  addExpense: (expenses) => {},
  deleteExpense: (id) => {},
  addOneExpense: (expense) => {},
});

export default ExpensesContext;
