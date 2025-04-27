import React from "react";

const Digito = (props) => {
    return (
        <div className=" bg-secondary rounded p-3 fs-3">
            <h1> {props.seconds} </h1>
        </div>
    );
};

export default Digito;
