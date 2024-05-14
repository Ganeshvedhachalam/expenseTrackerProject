import React from "react";

function Bar({ expense }) {
    const barWidth = `${expense.price}px`;

    return (
        <div style={{ display: "flex", margin: "20px", padding: "10px", width: "850px", justifyContent: "space-around", backgroundColor: "#ffd", alignItems: "center" }}>
            <div style={{ color: "black", display: "flex", width: "200px" }}>
                <h3>{expense.category}</h3>
            </div>
            <div style={{ display: "flex", backgroundColor: "lightgreen", height: "20px", width: "700px", border: "1px solid" }}>
                <div style={{ display: "flex", backgroundColor: "red", height: "20px", width: barWidth }}></div>
            </div>
        </div>
    );
}

function TopExpenses({ expenses }) {
    return (
        <div style={{  overflowX: "auto" }}>
            <h1 style={{ color: "white" }}>Top Expenses</h1>
            <div style={{ overflow:"auto", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", backgroundColor: "white", width: "900px", height: "500px", border: "1px", borderRadius: "10px" }}>
                {expenses.map((expense, index) => <Bar key={index} expense={expense} />)}
            </div>
        </div>
    );
}

export default TopExpenses;
