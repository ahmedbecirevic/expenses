import axios from 'axios';
import { useState, useCallback } from 'react';
import ExpensesContext from './expenses-context';

const ExpensesProvider = props => {
  const [expenses, setExpenses] = useState([]);

  // add all fetched expenses
  const addExpensesHandler = useCallback(fetchedExpenses => {
    setExpenses(fetchedExpenses);
  }, []);

  // add one expense
  const addNewExpenseHandler = useCallback(expense => {
    setExpenses(prevExpenses => {
      return [...prevExpenses, expense];
    });
  }, []);

  const deleteExpenseHandler = useCallback(expenseId => {
    axios
      .delete(
        `https://react-app-practice-5893f-default-rtdb.europe-west1.firebasedatabase.app/expenses/${expenseId}.json`
      )
      .then(res => {
        res.data == null &&
          setExpenses(prevState => {
            const filteredExpenses = prevState.filter(
              expense => expense.id !== expenseId
            );
            return filteredExpenses;
          });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const expensesContext = {
    expenses: expenses,
    addExpense: addExpensesHandler,
    deleteExpense: deleteExpenseHandler,
    addOneExpense: addNewExpenseHandler,
  };

  return (
    <ExpensesContext.Provider value={expensesContext}>
      {props.children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesProvider;
