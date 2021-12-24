import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    function saveExpanseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpanseDataHandler}/>
        </div>
    );
}

export default NewExpense;