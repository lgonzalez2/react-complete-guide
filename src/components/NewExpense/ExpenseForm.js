import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm (props) {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (e) => {
        // ensures that the latest states stay the same and 
        // enteredTitle can be overrided
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: e.target.value};
        });
    };

    const amountChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: e.target.value};
        });
    }

    const dateChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {...prevState, enteredDate: e.target.value};
        }); 
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setUserInput(() => {
            return {
                enteredTitle: '',
                enteredAmount: '',
                enteredDate: ''
            };
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense-controls'>
                <div className='new-expense-control'>
                    <label>Title</label>
                    <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense-control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense-control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" value={userInput.enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense-actions'>
                <button onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;