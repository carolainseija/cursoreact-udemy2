import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import './components/Expenses/Expenses.css';
import NewExpense from './components/newExpense/NewExpense';
import Other from './other';


const expensesInitial = [
  {
    id: 1,
    title: "gastos 1",
    amount: 32,
    date: new Date(2022, 5, 21)
  },
  {
    id: 12,
    title: "gastos 2",
    amount: 46.92,
    date: new Date(2022, 1, 21)
  },
  {
    id: 3,
    title: "gastos 3",
    amount: 32,
    date: new Date(2021, 12, 14)
  }
]


function App() {


  const [stateSpenses, setStateSpenses] = useState(expensesInitial);

  console.log("estado inicial expenses", stateSpenses)

  const addExpenseHandler = Newexpense => {
    setStateSpenses((prevExpenses) => {
      return [Newexpense, ...prevExpenses];
    });
  }

  return (
    <div>
      <h2 className="titulo-main">Presupuestos del año- finanzas.</h2>
  
      <NewExpense onAddExpense={addExpenseHandler} />
      <p className="subtitle-main">Ingresos - Egresos</p>
      <Expenses items={stateSpenses} />
      <div className='divv'>
 <Other />
      </div>
    </div>
  );
}

export default App;
