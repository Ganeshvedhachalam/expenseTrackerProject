import React from "react";
import { FaTrash,FaEdit } from "react-icons/fa";

import "./transactioncard.css";
function TransactionBox({ transaction  ,onDelete ,onEdit}) {
    const { date, title, price,category } = transaction;

    const handleDelete=(transaction)=>{
        onDelete(transaction)
    }
    const handleEdit=(transaction)=>{
        onEdit(transaction)
    }

    return (
        <div  style={{display:"flex",justifyContent:"space-around" ,width:"1200px" ,alignItems:"center"}} className="TransactionBox">
            <div className="TransactionDate">  <h2>{date}</h2></div>
            <div className="TransactionDescription"> <h2>{title}</h2> </div>
            <div className="TransactionAmount"><h1>{price}</h1></div>
            <div > <button className="DeleteButton" onClick={handleDelete}> <FaTrash size={30} /> </button></div>
            <div ><button className="EditButton" onClick={handleEdit}>  <FaEdit size={30} /></button></div>
        </div>
    );
}

function RecentTransactions({ expenses  ,onDelete, onEdit}) {
    return (
        <div>
            <h1 style={{color:"white"}}>Recent Transactions</h1>

            <div style={{ overflow:"auto", display:"flex" ,justifyContent:"center ",flexDirection:"column", alignItems:"center",
            backgroundColor:"white", width:"1500px" ,height:"500px" ,border:"1px",borderRadius:"10px"}}>
{/* 
                <div style={{width:"1000px",height:"500px", overflow:"auto",display:"flex",justifyContent:"center",
                 flexDirection:"column", alignItems:"center",backgroundColor:"orange"}}> */}
                

                {expenses.map((expense, index) => (
                    <div key={index}>
                        <TransactionBox
                            transaction={expense}
                            onDelete={() => onDelete(index)} // Pass the onDelete function with the index of the transaction
                            onEdit={() => onEdit(expense, index)}  // Pass the onEdit function with the transaction object
                        />
                    </div>
                ))}
            
                     {/* </div> */}
                 


              
            </div>
            

           
        </div>
    );
}

export default RecentTransactions;
