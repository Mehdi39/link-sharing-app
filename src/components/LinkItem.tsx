import { ChangeEvent, FC, useState } from 'react';
import { FiLink } from 'react-icons/fi';
import { HiOutlineTrash } from 'react-icons/hi';
import Dropdown from "@/elements/Dropdown";
import IconDragAndDrop from "@/assets/images/IconDragAndDrop"
import HeadingS from "@/elements/Text/HeadingS";
import BodyM from "@/elements/Text/BodyM";
import BodyS from "@/elements/Text/BodyS";
import Input from "@/elements/Input";

interface LinkFormProps {
    id?: number;
    onRemove?: () => void;
}

const LinkItem: FC<LinkFormProps> = ({ id = 1, onRemove = () => {console.log("ID removed!")} }) => {
    const [platform, setPlatform] = useState('GitHub');
    const [link, setLink] = useState('');

    const handlePlatformChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPlatform(e.target.value);
    };

    const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLink(e.target.value);
    };

    return (
        <div className="bg-gray-100 p-5 rounded-md w-full h-full">
            {/* Header with Remove button */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex justify-center items-center gap-2">
                    <IconDragAndDrop color="#737373"/>
                    <HeadingS text="Link #">{id}</HeadingS>
                </div>
                <button onClick={onRemove} className="text-gray-500 hover:text-gray-700">
                    <BodyM text="Remove"/>
                </button>
            </div>

            {/* Platform Selector */}
            <div className="mb-4">
                <label className="block text-gray-700 mb-2"><BodyS text="Platform"/></label>
                <div className="relative z-40">
                    <Dropdown />
                </div>
            </div>

            {/* Link Input Field */}
            <div>
                <label className="block mb-2"><BodyS text="Link" /></label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FiLink className="text-gray-400" />
                  </span>
                    <Input placeholder="e.g. https://www.github.com/johnappleseed" state="active" />
                </div>
            </div>
        </div>
    );
};

export default LinkItem;
