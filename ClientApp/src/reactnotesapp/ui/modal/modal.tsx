import * as React from 'react';
//import hoc from '../../component/highordercomponent/choc';
import Backdrop from '../backdrop/backdrop';
import './modal.css';

//declare namespace JSX {
//    interface IntrinsicElements {
//        hoc: any;
//    }
//}

const Modal = (props: any) =>
    //hoc(props) {
    //    <Backdrop show={props.show} clicked={props.modalClosed} />
    //<div className="Modal" style={{
    //    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
    //    opacity: props.show ? '1' : '0'
    //}}>
    //    {props.children}
    //</div>
    //}
     <div>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className="Modal" style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </div>
    </div>;

export default Modal;