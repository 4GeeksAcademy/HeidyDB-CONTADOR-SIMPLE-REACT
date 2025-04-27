import React from "react";

const Digito = (props) => {
    return (
        <div >
            <h1>  {props.seconds} </h1>
            <h1>  {props.secondsDec} </h1>
        </div>
    );
};

export default Digito;
