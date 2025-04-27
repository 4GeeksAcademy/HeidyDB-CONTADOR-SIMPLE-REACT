import React from "react";
import Digito from "./Digito.jsx";


//create your first component

const Home = (props) => {

			
	return (
		<>
		<div className="text-center bg-dark text-white p-4">
			 <div className="mb-4"> 
			 <i className="fa-solid fa-clock fa-3x"></i>
     		 </div>
 
		   <div className="d-flex justify-content-center"> 
		  	 <Digito  seconds={props.seis} />
		  	 <Digito  seconds={props.cinco} />  
		  	 <Digito  seconds={props.cuatro} /> 
		  	 <Digito  seconds={props.tres} /> 
		  	 <Digito  seconds={props.dos} />
		  	 <Digito  seconds={props.uno} />  
		   </div> 

		 </div> 

		<div className ="bg-white text-center p-2 " ></div> 

		<div className="text-center bg-dark text-white p-4">
		    <div className="d-flex justify-content-center"> 

			<div className="input-group">
			 	 <span className="input-group-text w-10">Decrementar desde:</span>
 			 	<input type="text"  className="form-control "></input>
			</div>

			 <Digito  secondsDec= {props.seisDec} />
		  	 <Digito  secondsDec= {props.cincoDec} />  
		  	 <Digito  secondsDec= {props.cuatroDec} /> 
		  	 <Digito  secondsDec= {props.tresDec} /> 
		  	 <Digito  secondsDec= {props.dosDec} />
		  	 <Digito  secondsDec= {props.unoDec} />  
		   </div>  
		   
		  
		  </div>
		</>
	);
};

export default Home;