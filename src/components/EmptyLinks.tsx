import Image from "next/image";
import illustraionEmpty from "@/assets/images/illustration-empty.svg";
import HeadingM from "@/elements/Text/HeadingM";
import React from "react";

const EmptyLinks = () => {
    return (
        <div className="flex flex-col items-center">
            <Image
                src={illustraionEmpty}
                alt="Get Started Illustration"
                className="w-48 h-48"
                width={249.53}
                height={160}
            />
            <div className="text-center space-y-6 max-w-[488px]">
                <HeadingM text="Let’s get you started"/>
                <p className="text-body-m text-graphite_gray text-center max-w-lg">
                    Use the “Add new link” button to get started. Once you have more than one link, you
                    can
                    reorder and edit them. We’re here to help you share your profiles with everyone!
                </p>
            </div>
        </div>
    )
}

export default EmptyLinks;
