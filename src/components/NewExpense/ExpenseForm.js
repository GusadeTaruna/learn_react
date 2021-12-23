import React, {useState} from "react";
import './ExpenseForm.css';

function ExpenseForm() {
    //Approach 1
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    //Approach 2
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    function titleChangeHandler(event) {
        // console.log(event.target.value);
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        });
    }

    function amountChangeHandler(event) {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        });
    }

    function dateChangeHandler(event) {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        });
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} ></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;