import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses (props) {
    const [selectedYear, setSelectedYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler}/>
                {props.expenses.map(expense => (
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}/>
                ))}
            </Card>
        </div>
    );
}

export default Expenses;