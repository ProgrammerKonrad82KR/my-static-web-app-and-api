import * as React from 'react';
import './Backdrop.css';
const Backdrop = (props) => (props.show ? React.createElement("div", { className: "Backdrop", onClick: props.clicked }) : null);
export default Backdrop;
//# sourceMappingURL=backdrop.js.map