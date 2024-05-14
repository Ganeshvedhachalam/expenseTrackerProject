
import PieExpenses from "./Piechart";
import RecentTransactions from "./RecentTransations"
import Displaybox from "./WalletBox/displaybox"
import ExpenseDisplaybox from "./ExpenseBox/expenseDisplaybox"
import Topexpenses from "./topExpenses";
import { useEffect, useState } from "react";
import AddExpense from "./ExpenseBox/AddexpenseForm";
import "./innerview.css"

function InnnerView(){

        const [balance, setBalance] = useState(() => {
        const storedBalance = localStorage.getItem("balance");
        return storedBalance ? parseFloat(storedBalance) : 5000;
    });

    const [expenses, setExpenses] = useState(() => {
        const storedExpenses = localStorage.getItem("expenses");
        return storedExpenses ? JSON.parse(storedExpenses) : [];
    });

    useEffect(() => {
        localStorage.setItem("balance", balance);
    }, [balance]);

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);



    console.log(expenses)
    const [editedTransaction, setEditedTransaction] = useState(null);
    const [editedTransactionIndex, setEditedTransactionIndex] = useState(null);


    const handleDelete = (index) => {
        // Create a copy of expenses array
        const updatedExpenses = [...expenses];
        // Remove the transaction at the given index
        updatedExpenses.splice(index, 1);
        // Update the state with the updated expenses array
        setExpenses(updatedExpenses);
    };

    const handleEdit = (editedTransaction, index) => {
        setEditedTransactionIndex(index);
        setEditedTransaction(editedTransaction);
    };

    
    const handleSaveChanges = (updatedTransaction) => {
        const updatedExpenses = expenses.map((expense, index) =>
            index === editedTransactionIndex ? updatedTransaction : expense
        );
        setExpenses(updatedExpenses);
        setEditedTransaction(null); // Reset edited transaction state
        setEditedTransactionIndex(null); // Reset edited transaction index
        console.log(`updated transaction : ${updatedTransaction}`)
        console.log( `updated expenses :${updatedExpenses}`)
        console.log("saved chnages")
        
    };

    const handleAddbalance=(balanceAmount)=>{
        setBalance(prevBalance => prevBalance + parseFloat(balanceAmount.income));
        
    }

    const handleAddExpense = (formData) => {
        const expenseAmount = parseFloat(formData.price);
        if (expenseAmount > balance) {
            alert("You cannot spend more than your available wallet balance!");
            return;
        }


        if (editedTransactionIndex !== null) {
            // Create a copy of expenses array
            const updatedExpenses = [...expenses];
            // Update the transaction at the specified index
            updatedExpenses[editedTransactionIndex] = formData;
            // Update the state with the updated expenses array
            setExpenses(updatedExpenses);
        } else {
            // Add a new expense to the expenses array
            setExpenses([...expenses, formData]);
        }
    
        setBalance(prevBalance => prevBalance - expenseAmount);

    };

    const transactions = [
        { date: "2024-05-10", description: "Groceries", amount: "-$50.00" },
        { date: "2024-05-09", description: "Gasoline", amount: "-$30.00" },
        { date: "2024-05-08", description: "Restaurant", amount: "-$25.00" }
    ];
    const categories = [
        { label: "Food", value: "food" },
        { label: "Entertainment", value: "entertainment" },
        { label: "Travel", value: "travel" }
    ];


    return(
        <div className="innerview-container">
        <div style={{ display :"flex",width:"100%",height:"100%" ,justifyContent:"center"}}>

        <div className="innerview" style={{backgroundColor:"#3B3b3b", 
            // width:"100vw",height:"100vh" 
            display :"flex", flexDirection:"column",width:"96% ", height:"96%"
            ,margin:"10px 12px",border:"3px solid orange",alignItems:"center" }}>

                <div style={{display:"flex",justifyContent:"flex-start",color:"white", width:"95%" }}>
                   
                    <div>  <h1>Expense Tracker</h1> </div>
                    </div>
                

                <div  className=" uppersection" style={{display:"flex" ,backgroundColor:" #626262 ", width:"95%" ,
                height:"40%", margin:"0px 30px 20px 30px" ,justifyContent:"space-evenly" ,alignItems:"center"}} >
                    
               < Displaybox amount={balance} handleAddExpense={handleAddbalance}/>
               <ExpenseDisplaybox amount={expenses.reduce((total, expense) => total + parseFloat(expense.price), 0)}
                handleAddExpense={handleAddExpense} expenses={expenses}/>
               {/* < Displaybox name={"Piechart"} amount={"5000"} buttonname={"+ Add expenses"}/> */}
               <PieExpenses expenses={expenses}/>
                </div>


                <div className="lowersection"style={{display:"flex" ,width:"95%",justifyContent:"space-evenly" ,alignItems:"center" }}> 
                <RecentTransactions  onDelete={handleDelete} onEdit={handleEdit} expenses={expenses}/> 
                

                {editedTransaction && (
            //  
            <div style={{display:"flex",width:"800px",height:"600px", justifyContent:"center",backgroundColor:"yellow",
                 alignItems:"center"}}>

                      <AddExpense
                                formData={editedTransaction}
                                handleAddExpense={handleSaveChanges}
                                toggleForm={() => setEditedTransaction(null)}
                                categories={categories}
                                editedTransactionIndex={editedTransactionIndex}
                                editedTransaction={editedTransaction}
                            />
                    

             </div>

            // <AddExpense formData={editedTransaction} handleAddExpense={handleSaveChanges} toggleForm={() => setEditedTransaction(null)} categories={categories} />
                )}

                < Topexpenses expenses={expenses}/>

                </div>

        </div>

       </div>

    </div>
       )

}
export default InnnerView