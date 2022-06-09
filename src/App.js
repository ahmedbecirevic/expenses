import Router from "./routes";
import ExpensesProvider from "./store/ExpensesProvider";

function App() {
  return (
    <ExpensesProvider>
      <Router />
    </ExpensesProvider>
  );
}

export default App;
