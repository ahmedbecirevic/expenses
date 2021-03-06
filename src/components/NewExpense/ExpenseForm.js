/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './ExpenseForm.css';
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux';
import { Box, Button, Stack } from '@mui/material';

function ExpenseForm({ onSaveExpenseData, onCancel }) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [isValid, setIsValid] = useState(true);
  const { userId } = useSelector((state) => state.userData);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      userId: userId || localStorage.getItem('id'),
    };

    if (
      enteredTitle.trim().length === 0
      || enteredAmount.trim().length === 0
      || enteredDate.trim().length === 0
    ) {
      setIsValid(false);

      return;
    }

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    // pass data to the parent component
    onSaveExpenseData(expenseData);
    onCancel();
  };

  return (
    <Stack direction="column" justifyContent="center">
      {!isValid && (
        <Alert sx={{ width: { md: '40%', sm: '60%', xs: '80%' } }} severity="error">Please fill out all of the fields!</Alert>
      )}
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.1"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        {/* <div className="new-expense__actions"> */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button sx={{ mr: 2, bgcolor: '#868787 !important' }} type="button" onClick={onCancel}>
            Cancel
          </Button>
          <Button sx={{ bgcolor: '#1a4246' }} type="submit">Add Expense</Button>
        </Box>
        {/* </div> */}
      </form>
    </Stack>
  );
}

export default ExpenseForm;
