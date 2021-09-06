import * as React from 'react';
import './Input.css';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Input = function (props) {
    var inputElement = null;
    var inputClasses = ["InputElement"];
    inputElement = React.createElement("input", __assign({ className: inputClasses.join(' ') }, props.elementConfig, { value: props.value, onChange: props.changed }));
    return (React.createElement("div", { className: "Input" },
        React.createElement("label", { className: "Label" }, props.label),
        inputElement));
};
export default Input;
//# sourceMappingURL=Input.js.map