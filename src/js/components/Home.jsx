import React from "react";
import Digito from "./Digito.jsx";

//create your first component

const Home = ({seis, cinco, cuatro, tres, dos, uno}) => {
		
	return (
		<>
		<div className="text-center bg-dark text-white p-4">
		
		 <div className="mb-4">
        	<i className="fa-solid fa-clock fa-3x"></i>
     	 </div>
 
		   <div className="d-flex justify-content-center"> 
		  	 <Digito  seconds={seis} />
		  	 <Digito  seconds={cinco} />  
		  	 <Digito  seconds={cuatro} /> 
		  	 <Digito  seconds={tres} /> 
		  	 <Digito  seconds={dos} />
		  	 <Digito  seconds={uno} />  
		   </div>     
		      
			<h1 className="text-center mt-5">   segundos: {seis}{cinco}{cuatro}{tres}{dos}{uno}</h1>
		</div>  		
					
		</>
	);
};

export default Home;