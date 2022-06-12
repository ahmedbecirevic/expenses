import {
  useState, useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { useHttp } from "../../hooks/use-http";
import { Box } from '@mui/material';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import { getAllExpenses } from '../../features/expenseSlice';
import NewExpense from '../NewExpense/NewExpense';
// import ExpensesContext from "../../store/expenses-context";

function Expenses() {
  const [year, setYear] = useState(2022);
  const { expenses, error, isLoading } = useSelector((state) => state.expenseData);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
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
    <Box>
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
