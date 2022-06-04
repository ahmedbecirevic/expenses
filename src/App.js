import Navigation from "./components/Navigation";
import Router from "./routes";
import ExpensesProvider from "./store/ExpensesProvider";

function App() {
  return (
    <ExpensesProvider>
      <Navigation />
      <Router />
    </ExpensesProvider>
  );
}

export default App;
