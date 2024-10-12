import React from "react";

interface BodyS {
    text: string;
    classnames?: string;
}

const BodyS: React.FC<BodyS> = ({text, classnames}) => {
    return (
        <p className={`${classnames} text-charcoal_black text-body-s `}>{text}</p>
    )
}

export default BodyS;