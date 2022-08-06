import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense (props) {
    const [showForm, setShowForm] = useState(false);

    const closeFormHandler = () => {
        setShowForm(!showForm);
    };
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        
        props.onAddExpense(expenseData);
        setShowForm(!showForm);
    }

    return (
        <div className='new-expense'>
            {showForm ? (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={closeFormHandler}/>) 
            : <button onClick={closeFormHandler}>Add New Expense</button>}
        </div>
    );
}

export default NewExpense;