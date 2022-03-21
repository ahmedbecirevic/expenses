import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ items, error, loading }) => {
  const style = { className: 'expenses-list__fallback' };
  if (error) {
    return <h2 {...style}>Cannot fetch any tasks!</h2>;
  }

  if (loading) {
    return <h2 {...style}>Loading expenses...</h2>;
  }

  if (items.length === 0) {
    return <h2 {...style}>No expenses found</h2>;
  }

  return (
    <ul className='expenses-list'>
      {items.map(expense => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
