import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Router from "./routes";
import ExpensesProvider from "./store/ExpensesProvider";

function App() {
  return (
    <ExpensesProvider>
      <Router />
      <NewExpense />
      <Expenses />
    </ExpensesProvider>
  );
}

export default App;
