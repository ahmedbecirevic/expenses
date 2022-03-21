import { useState, useContext, useCallback } from "react";

import { useHttp } from "../../hooks/use-http";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpensesContext from "../../store/expenses-context";

function NewExpense() {
  const { error, isLoading, sendRequest: addExpense } = useHttp();
  const { addOneExpense } = useContext(ExpensesContext);

  // const saveToFile = (fileName, data) => {
  //   // Create a blob of the data
  //   const fileToSave = new Blob([JSON.stringify(data)], {
  //     type: 'application/json',
  //   });
  //   // Save the file
  //   saveAs(fileToSave, fileName);
  // };

  const generateExpense = useCallback(
    async (expenseData, respData) => {
      const newExpense = {
        id: respData.name,
        title: expenseData.title,
        date: new Date(expenseData.date),
        amount: expenseData.amount,
      };

      addOneExpense(newExpense);
      // saveToFile('expenseData', newExpense);
    },
    [addOneExpense],
  );

  const saveExpsenseDataHandler = (enteredExpenseData) => {
    addExpense(
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: { ...enteredExpenseData },
      },
      generateExpense.bind(null, enteredExpenseData),
    );
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
      {error && <p>{error}</p>}
      {isLoading && <p>Adding expense...</p>}
    </div>
  );
}

export default NewExpense;
