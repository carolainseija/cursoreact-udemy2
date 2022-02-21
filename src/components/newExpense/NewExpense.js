import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = () => {

    const SaveExpenseData = (enteredExpebseData) => {
 const expenseData = {
     ...enteredExpebseData,
     id: Math.random().toString()
 }
    }
     return (
        <div className="new-expense">
            <ExpenseForm  onSaveExpenseData/>
        </div>
    )
}

export default NewExpense;