import React from "react";

const ExpensesContext = React.createContext({
  expenses: [],
  addExpense: (expenses) => {},
  deleteExpense: (id) => {},
  addOneExpense: (expense) => {},
});

export default ExpensesContext;
