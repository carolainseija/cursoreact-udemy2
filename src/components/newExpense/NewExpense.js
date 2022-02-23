import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        //agregar id a los datos 
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        
        }
//  funcion de app le paso exénse data que son todo lpos valores que necesito guardar en el array
        props.onAddExpense(expenseData)
    }
   
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}  />
        </div>
    )
}

export default NewExpense;