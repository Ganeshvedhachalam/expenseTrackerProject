import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";



function CustomPieChart({ data ,colors}) {
  // Define fixed colors for each category
//   const colours =["orange","violet","yellow"]  
  
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="price"
        nameKey="category"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        label
      >
       {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={colors[entry.category] || "black"}
          />
        ))}
        {/* {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[entry.category]} />
        //   <Cell key={`cell-${index}`} fill={colours[index % colours.length]} />
        ))} */}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}



function PieExpenses({ expenses }) {
  // Convert expenses to the required format for PieChart
  const pieChartData = expenses.map(expense => ({
    category: expense.category,
    price: parseFloat(expense.price)
  }));
  console.log("Pie Chart Data:", pieChartData);

  const colors = {
    food: "violet",
    entertainment: "orange",
    travel: "yellow"
  };


  return (
    <div>
      <CustomPieChart data={pieChartData} colors={colors} />
      <div style={{display:"flex",justifyContent:"space-evenly" ,width:"400", color:"white" }}>

<div>Entertainment <div style={{backgroundColor:"orange", width:"50px",
padding:"10px", margin:"10px"}}></div> 
</div>

<div> Food  
    <div style={{backgroundColor:"violet", width:"50px",
padding:"10px", margin:"10px"}}></div> 
 </div>

<div> Travel  
     <div style={{backgroundColor:"yellow", width:"50px",
padding:"10px", margin:"10px"}}></div>
 </div>





</div> 

    </div>
  );
}

export default PieExpenses;
