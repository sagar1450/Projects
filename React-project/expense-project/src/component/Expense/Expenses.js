import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'

const Expense=(props)=>{
    return(
        // <Card className="expenses ">
        //     <ExpenseItem date={props.item[0].date}
        //         title={props.item[0].title}
        //         amount={props.item[0].amount}>
        //     </ExpenseItem>
        //     <ExpenseItem date={props.item[1].date}
        //         title={props.item[1].title}
        //         amount={props.item[1].amount}>
        //     </ExpenseItem>
        //     <ExpenseItem date={props.item[2].date}
        //         title={props.item[2].title}
        //         amount={props.item[2].amount}>
        //     </ExpenseItem>
        // </Card>
        <Card className="expenses">
            {
                props.item.map(
                    expense => (
                        <ExpenseItem                            
                            date={ expense.date } 
                            title={ expense.title } 
                            amount={ expense.amount} />
                    )
                )
            }

        </Card>
    );
}

export default Expense;