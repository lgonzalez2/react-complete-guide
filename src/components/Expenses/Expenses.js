import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses (props) {
    const [selectedYear, setSelectedYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={selectedYear} 
                    onChangeFilter={filterChangeHandler}>
                </ExpensesFilter>
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;