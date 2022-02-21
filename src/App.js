import Expenses from './components/Expenses/Expenses';
import './components/Expenses/Expenses.css';
import NewExpense from './components/newExpense/NewExpense';

function App() {

  const expenses = [
    {
      id: 1,
      title: "gastos 1",
      amount: 32,
      date: new Date(2022, 5, 21)
    },
    {
      id: 1,
      title: "gastos 2",
      amount: 46.92,
      date: new Date(2022, 1, 21)
    },
    {
      id: 1,
      title: "gastos 3",
      amount: 32,
      date: new Date(2021, 12, 14)
    }
  ]

  const addExpenseHandler = expense => {
    console.log("expense", expense)
  }

  return (
    <div>
      <h2 className="titulo-main">Presupuestos del año- finanzas.</h2>
      <NewExpense />
      <p className="subtitle-main">Ingresos - Egresos</p>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
