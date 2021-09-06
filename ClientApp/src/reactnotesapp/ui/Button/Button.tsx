import * as React from 'react';
import './Button.css';

const Button = (props: any) => (
    <button disabled={props.disabled} className={"Button " + props.btnType} onClick={(event) => { props.clicked(event); }}>{props.children}</button>
);

export default Button;