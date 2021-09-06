import * as React from 'react';
import './Button.css';
var Button = function (props) { return (React.createElement("button", { disabled: props.disabled, className: "Button " + props.btnType, onClick: function (event) { props.clicked(event); } }, props.children)); };
export default Button;
//# sourceMappingURL=Button.js.map