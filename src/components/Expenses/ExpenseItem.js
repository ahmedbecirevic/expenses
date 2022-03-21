import { useContext } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// import { FaTrashAlt } from 'react-icons/fa';
import ExpensesContext from "../../store/expenses-context";

function ExpenseItem({
  date, title, amount, id,
}) {
  const { deleteExpense } = useContext(ExpensesContext);

  const deleteExpenseHandler = () => deleteExpense(id);

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
            <button onClick={deleteExpenseHandler} type="button" />
          </div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
