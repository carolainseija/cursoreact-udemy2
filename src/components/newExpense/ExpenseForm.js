import React, { useState } from 'react';
import './ExpenseForm.css';
//57
const ExpenseForm = (props) => {

    const [stateGlobal, setStateGlobal] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    })

    const titleChangeHandler = (event) => {
        setStateGlobal({
            ...stateGlobal,
            enteredTitle: event.target.value,
        })
    }

    const amountChangeHandler = (event) => {
        setStateGlobal({
            ...stateGlobal,
            enteredAmount: event.target.value,
        })
    }

    const dateChangeHandler = (event) => {
        setStateGlobal({
            ...stateGlobal,
            enteredDate: event.target.value,
        })
    }

    //guarda los valores de los inputs en un estado global
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
          title: stateGlobal.enteredTitle,
          amount: stateGlobal.enteredAmount,
          date: new Date(stateGlobal.enteredDate)
        };
        //onSaveExpenseData lo traje por props desde  NewExpense.js
        //le paso expense data que es lo que usa la funcion para agregarle la id a lo que ya estaba
        props.onSaveExpenseData(expenseData);


        setStateGlobal("")
      };
    

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Titulo</label>
                    <input type="text" name='title' value={stateGlobal.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Monto</label>
                    <input type="number"  value={stateGlobal.enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Fecha</label>
                    <input type="date"  value={stateGlobal.enteredDate} onChange={dateChangeHandler} min="2022-01-01" step="2023-12-31" />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'> Añadir Gastos</button>
            </div>
        </form>
    )
}

export default ExpenseForm;