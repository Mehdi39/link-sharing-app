import React from "react";

interface HeadingS {
    text: string;
    classnames?: string;
}

const HeadingS: React.FC<HeadingS> = ({text, classnames}) => {
    return (
        <h2 className={`${classnames} text-heading-s font-semibold text-graphite_gray`}>
            {text}
        </h2>
    )
}

export default HeadingS;