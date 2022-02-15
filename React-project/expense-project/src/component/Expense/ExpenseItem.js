import React,{useState} from 'react';

import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card'


const ExpenseItem=(props)=> { //passsing data via props
    // const month = props.date.toLocaleString('en-US', {month: 'long'});
    // const year = props.date.getFullYear();
    // const day = props.date.toLocaleString('en-US', {day: '2-digit'});

    // const[newTitle,setNewTitle]=useState();
    // const[title, setTitle]=useState(props.title); //array destructuring..useState return array..

    // const changeHandler=(event)=>{
    //     setNewTitle(event.target.value);
    // }

    // const clickHndler=()=>{
    //     setTitle(newTitle);
    // }

    return ( 
        // <div className="expense-item">
        //     {/* <div>
        //         <div >{month}</div>
        //         <div >{year}</div>
        //         <div>{day}</div>v
        //     </div> */}
        //     {/* multiple componenet */}
        //     <ExpenseDate date={new Date(props.date)} />
        //     <div className="expense-item__description">
        //         <h2>{props.title}</h2>
        //         <div className="expense-item__price">${props.amount}</div>
        //     </div>
        // </div>
        <Card className="expense-item">
            <ExpenseDate date={new Date(props.date)} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <input type="text" value={newTitle} onChange={changeHandler} />
            <button onClick={clickHndler}>click</button> */}
        </Card>
    );
}

export default ExpenseItem;