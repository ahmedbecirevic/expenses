import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useDispatch } from 'react-redux';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { deleteExpense, getAllExpenses } from '../../features/expenseSlice';
import { isFulfilled } from '@reduxjs/toolkit';

function ExpenseItem({
  date, title, amount, id,
}) {
  const dispatch = useDispatch();
  const deleteExpenseHandler = async () => {
    const res = await dispatch(deleteExpense(id));
    if (isFulfilled(res)) {
      dispatch(getAllExpenses());
    }
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">
            $
            {amount}
          </div>
          <div className="delete-icon">
            <RemoveCircleOutlineIcon onClick={deleteExpenseHandler} type="button" />
          </div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
