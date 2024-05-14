import React, { useState } from "react";
import AddExpense from "./AddexpenseForm";

function ExpenseDisplaybox({ amount, handleAddExpense }) {
    
    const [showForm, setShowForm] = useState(false);

    const categories = [
        { label: "Food", value: "food" },
        { label: "Entertainment", value: "entertainment" },
        { label: "Travel", value: "travel" }
    ];

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <>
            <div className="MainDisplaybox">
                <div
                    className="Displaybox"
                    style={{
                        backgroundColor: "#9B9B9B",
                        display: "flex",
                        justifyContent: "center",
                        width: "500px",
                        height: "300px",
                        flexDirection: "column",
                        alignContent: "center",
                        border: "1px solid grey",
                        borderRadius: "28px",
                        maxWidth:"500px",
                    
                        margin:"0 auto"
                    }}
                >
                    <div style={{ color: "white" }}>
                        <h1>Expenses: ${amount}</h1>
                    </div>

                    <div>
                        <button
                            className="Addbutton"
                            style={{
                                width: "200px",
                                padding: "10px",
                                color: "white",
                                border: "1px solid grey",
                                fontFamily: "sans-serif",
                                borderRadius: "20px",
                                backgroundColor: "red"
                            }}
                            onClick={toggleForm}
                        >
                           +Add expenses
                        </button>
                    </div>
                </div>
            </div>

            {showForm && (
                <div style={{display:"flex",width:"800px",height:"600px", justifyContent:"center",backgroundColor:"yellow",
                 alignItems:"center"}}>
                     <AddExpense handleAddExpense={handleAddExpense} toggleForm={toggleForm} categories={categories}/></div>
               
            )}
        </>
    );
}

export default ExpenseDisplaybox;
