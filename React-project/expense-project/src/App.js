import React, { useState} from "react";
import Expenses from "./component/Expense/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

let DUMMY_EXPENSE = [
    {
        id: 'e1',
        title: 'school fee',
        amount: 250,
        date: new Date(2021, 5, 12)
    },
    {
        id: 'e2',
        title: 'Car Insurance',
        amount: 350,
        date: new Date(2021, 5, 12)
    },
    {
        id: 'e3',
        title: 'Books',
        amount: 450,
        date: new Date(2021, 5, 12)
    },

]
const App = () => {
  const[expenses,setExpenses]=useState(DUMMY_EXPENSE);
   

    const addExpeneHandler=(expense)=>{
          const updateExpense=[expense,...expenses];
          setExpenses(updateExpense);
          console.log(updateExpense);
    }

    return (
        // <div>
        //     <ExpenseItem date={expense[0].date}
        //         title={expense[0].title}
        //         amount={expense[0].amount}>
        //     </ExpenseItem>
        //     <ExpenseItem date={expense[1].date}
        //         title={expense[1].title}
        //         amount={expense[1].amount}>
        //     </ExpenseItem>
        //     <ExpenseItem date={expense[2].date}
        //         title={expense[2].title}
        //         amount={expense[2].amount}>
        //     </ExpenseItem>
        // </div>
        <div>
            <NewExpense onAddExpense={addExpeneHandler}/>
            <Expenses item={expenses} />
        </div>

    )
}

export default App;