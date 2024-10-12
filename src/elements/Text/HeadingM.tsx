import React from "react";

interface HeadingM {
    text: string;
    classnames?: string;
}

const HeadingM: React.FC<HeadingM> = ({text, classnames}) => {
    return (
        <h2 className={`${classnames} text-heading-m font-bold text-charcoal_black`}>{text}</h2>
    )
}

export default HeadingM;