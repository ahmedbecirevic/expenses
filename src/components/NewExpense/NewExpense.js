import { useState, useContext, useCallback } from "react";
import { useHttp } from "../../hooks/use-http";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpensesContext from "../../store/expenses-context";
import { useDispatch, useSelector } from "react-redux";
import { createExpense, getAllExpenses } from "../../features/expenseSlice";
import { isFulfilled } from "@reduxjs/toolkit";

function NewExpense() {
  const dispatch = useDispatch();
  const {error: {isError, message}, isLoading} = useSelector(state => state.expenseData);

  const saveExpsenseDataHandler = async (enteredExpenseData) => {
    const res = await dispatch(createExpense(enteredExpenseData));
    if (isFulfilled(res)) {
      await dispatch(getAllExpenses());
    }
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditHandler = () => setIsEditing(true);
  const stopEditHandler = () => setIsEditing(false);

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditHandler} type="button">Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpsenseDataHandler}
          onCancel={stopEditHandler}
        />
      )}
      {isError && <p>{message}</p>}
      {isLoading && <p>Adding expense...</p>}
    </div>
  );
}

export default NewExpense;
