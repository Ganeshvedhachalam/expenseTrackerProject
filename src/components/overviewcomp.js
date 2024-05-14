
import logo from "../assets/Group 42.png"
import InnnerView from "./innerview";

function Overview() {
    return (
        <div style={{ backgroundColor:"white" ,width:"100vw",height:"100vh" }}> 
       <div className="logoicon" style={ 
        {display:"flex",alignItems:"center"}}>
            <img style={{width:"150px" ,height:"40px",padding:"10px", margin:"10px 0px 5px 20px"}} src={logo} alt="logo"/>
       </div>

       <InnnerView/>
       

        </div>
     
    );
  }
  
  export default Overview;
  