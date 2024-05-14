import React, { useState } from "react";
import "./AddBalance.css"

function AddBalance({ handleAddBalance, toggleForm }) {
    const[balanceformdata ,setbalanceformdata] =useState({
        income:""
    })
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setbalanceformdata({
            ...balanceformdata,[name]:value}
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddBalance(balanceformdata);
        // Reset form
        setbalanceformdata({
            income: ""});
        toggleForm();
    };
    
    return (
        <div className="BalanceForm">
            <h2>Add balance</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>income:</label>
                    <input name="income" value={balanceformdata.income} onChange={handleChange} type="text" />
                </div>

                

                <div className="form-actions">
                    <button type="submit">Add Balance</button>
                    <button type="button" onClick={toggleForm}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default AddBalance;
