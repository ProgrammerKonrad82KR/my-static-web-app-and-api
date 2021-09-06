import * as React from 'react';
import './Input.css';

const Input = (props: any) => {
    let inputElement = null;
    const inputClasses = ["InputElement"];

    inputElement = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;

    return (<div className="Input">
        <label className="Label">{props.label}</label>
        {inputElement}
    </div>
    );
};

export default Input;