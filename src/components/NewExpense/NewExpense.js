import { useState } from 'react';
import './NewExpense.css';
import { useDispatch, useSelector } from 'react-redux';
import { isFulfilled } from '@reduxjs/toolkit';
import ExpenseForm from './ExpenseForm';
import { createExpense, getAllExpenses } from '../../features/expenseSlice';

function NewExpense() {
  const dispatch = useDispatch();
  const { error: { isError, message }, isLoading } = useSelector((state) => state.expenseData);

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
