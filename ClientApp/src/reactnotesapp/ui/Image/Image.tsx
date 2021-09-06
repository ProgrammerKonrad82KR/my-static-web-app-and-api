import * as React from 'react';
import './Image.css';

const Image = (props: any) => {
    let imageElement = null;
    const imageClasses = ["ImageElement"];

    imageElement = <img
        className={imageClasses.join(' ')}
        src={props.pathImage} />;

    return (<div className="Image">
        <label className="Label">{props.label}</label>
        {imageElement}
    </div>
    );
};

export default Image;