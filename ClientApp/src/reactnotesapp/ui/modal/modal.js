import * as React from 'react';
//import hoc from '../../component/highordercomponent/choc';
import Backdrop from '../backdrop/backdrop';
import './modal.css';
//declare namespace JSX {
//    interface IntrinsicElements {
//        hoc: any;
//    }
//}
var Modal = function (props) {
    //hoc(props) {
    //    <Backdrop show={props.show} clicked={props.modalClosed} />
    //<div className="Modal" style={{
    //    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
    //    opacity: props.show ? '1' : '0'
    //}}>
    //    {props.children}
    //</div>
    //}
    return React.createElement("div", null,
        React.createElement(Backdrop, { show: props.show, clicked: props.modalClosed }),
        React.createElement("div", { className: "Modal", style: {
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            } }, props.children));
};
export default Modal;
//# sourceMappingURL=modal.js.map