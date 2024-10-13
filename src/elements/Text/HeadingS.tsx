import React from "react";

interface HeadingS {
    text: string;
    classnames?: string;
    children?: React.ReactNode;
}

const HeadingS: React.FC<HeadingS> = ({text, classnames, children}) => {
    return (
        <h2 className={`${classnames} text-heading-s font-semibold text-graphite_gray`}>
            {text}{children}
        </h2>
    )
}

export default HeadingS;
