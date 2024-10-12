import React from "react";

interface BodyM {
    text: string;
    classnames?: string;
}

const BodyM: React.FC<BodyM> = ({text, classnames}) => {
    return (
        <p className={`${classnames} text-graphite_gray text-body-m`}>{text}</p>
    )
}

export default BodyM;