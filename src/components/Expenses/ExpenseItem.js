import React, { useState } from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    
    const clickHandler = () => {
        setTitle('Updated!');
    }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                    <div className="expense-item-description">
                        <h2>{title}</h2>
                        <div className="expense-item-price">{props.amount}</div>
                    </div>
                    {/* dont use parentheses on click handler 
                    because then the function will be done at 
                    initial rendering, not when event actually occurs */}
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;