import React from "react";
import "./Addexpense.css"
import { useState ,useEffect} from "react";

function AddExpense({ handleAddExpense, toggleForm ,categories,editedTransaction,editedTransactionIndex}) {

    const [formData, setFormData] = useState({
        title: "",
        price: "",
        category: categories[0].value, // Default to the first category
        date: ""
    });
    
    
    // Update formData state when editedTransaction changes
    useEffect(() => {
        
        if (editedTransaction) {
            setFormData({
                title: editedTransaction.title || "",
                price: editedTransaction.price || "",
                category: editedTransaction.category || categories[0].value,
                date: editedTransaction.date || ""
            });
        }
    }, [editedTransaction, categories]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddExpense(formData , editedTransactionIndex);
        // Reset form
        setFormData({
            title: "",
            price: "",
            category: categories[0].value,
            date: ""
        });
        toggleForm();
    };


    return (
        <div className="ExpenseForm">
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input name ="title" value={formData.title} onChange={handleChange} type="text" />
                </div>

                <div className="form-group">
                    <label>Price:</label>
                    <input name ="price" value={formData.price} onChange={handleChange} type="text" />
                </div>

                <div className="form-group">
                    <label>Select Category:</label>
                    <select name="category" value={formData.category} onChange={handleChange}>
                        {categories.map((category) => (
                            <option key={category.value} value={category.value}>{category.label}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Date:</label>
                    <input name ="date" value={formData.date} onChange={handleChange} type="date" />
                </div>

                <div className="form-actions">
                    <button type="submit">Add Expense</button>
                    <button type="button" onClick={toggleForm}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default AddExpense;
