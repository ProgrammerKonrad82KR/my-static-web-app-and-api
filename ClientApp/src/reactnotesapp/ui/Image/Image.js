import * as React from 'react';
import './Image.css';
var Image = function (props) {
    var imageElement = null;
    var imageClasses = ["ImageElement"];
    imageElement = React.createElement("img", { className: imageClasses.join(' '), src: props.pathImage });
    return (React.createElement("div", { className: "Image" },
        React.createElement("label", { className: "Label" }, props.label),
        imageElement));
};
export default Image;
//# sourceMappingURL=Image.js.map