import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesProvider from "./store/ExpensesProvider";

function App() {
  return (
    <ExpensesProvider>
      <NewExpense />
      <Expenses />
    </ExpensesProvider>
  );
}

export default App;
