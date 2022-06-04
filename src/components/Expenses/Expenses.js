import {
  useState, useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// import { useHttp } from "../../hooks/use-http";
import { Box } from "@mui/material";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { addExpenses, getAllExpenses } from "../../features/expenseSlice";
import NewExpense from "../NewExpense/NewExpense";
// import ExpensesContext from "../../store/expenses-context";

function Expenses() {
  const [year, setYear] = useState(2021);
  const { expenses, error, isLoading } = useSelector((state) => state.expenseData);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      // const res = await axios.get("https://react-app-practice-5893f-default-rtdb.europe-west1.firebasedatabase.app/expenses.json");
      // dispatch(addExpenses(Object.entries(res.data).map(([id, expense]) => ({
      //   id,
      //   // date: new Date(expense?.date),
      //   ...expense,
      // }))));
      await dispatch(getAllExpenses());
    })();
  }, []);

  const expensesFiltered = expenses?.filter(
    (expense) => {
      const newDate = new Date(expense?.date);
      return newDate.getFullYear() === year;
    },
  );

  const onYearFilterHandler = (selectedYear) => {
    setYear(Number(selectedYear));
  };

  return (
    <Box sx={{ mt: 2 }}>
      <NewExpense />
      <Card className="expenses">
        <ExpensesFilter defaultYear={year} onSelectYear={onYearFilterHandler} />
        <ExpensesChart expenses={expensesFiltered} />
        <ExpensesList
          items={expensesFiltered}
          loading={isLoading}
          error={error?.isError}
        />
      </Card>
    </Box>
  );
}

export default Expenses;
