import {
  useState, useContext, useEffect, useCallback,
} from "react";

import { useHttp } from "../../hooks/use-http";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpensesContext from "../../store/expenses-context";

function Expenses() {
  const [year, setYear] = useState(2021);
  const { expenses, addExpense } = useContext(ExpensesContext);
  const { error, isLoading, sendRequest: getExpenses } = useHttp();

  const transformExpenses = useCallback(
    (expensesObject) => {
      const loadedExpenses = [];

      for (const expenseKey in expensesObject) {
        const expense = expensesObject[expenseKey];
        loadedExpenses.push({
          id: expenseKey,
          title: expense.title,
          date: new Date(expense.date),
          amount: expense.amount,
        });
      }

      addExpense(loadedExpenses);
    },
    [addExpense],
  );

  useEffect(() => {
    getExpenses(
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
      transformExpenses,
    );
  }, [getExpenses, transformExpenses]);

  const onYearFilterHandler = (selectedYear) => {
    setYear(Number(selectedYear));
  };

  const expensesFiltered = expenses.filter(
    (expense) => expense.date.getFullYear() === year,
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter defaultYear={year} onSelectYear={onYearFilterHandler} />
        <ExpensesChart expenses={expensesFiltered} />
        <ExpensesList
          items={expensesFiltered}
          loading={isLoading}
          error={error}
        />
      </Card>
    </div>
  );
}

export default Expenses;
