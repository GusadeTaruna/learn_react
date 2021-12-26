import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    const [isAdding, setAddingValue] = useState(false);

    function saveExpanseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    function addingDataHandler() {
        setAddingValue(true);
    }

    function cancelAddingHandler() {
        setAddingValue(false);  
    }

    return(
        <div className="new-expense">
            {!isAdding && <button type='button' onClick={addingDataHandler}>Add New Expense</button>}
            {isAdding && <ExpenseForm cancel={cancelAddingHandler} onSaveExpenseData={saveExpanseDataHandler}/>}
        </div>
    );
}

export default NewExpense;