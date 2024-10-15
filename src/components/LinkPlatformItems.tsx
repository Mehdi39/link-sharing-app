import { useLinks } from "@/context/LinkContext";
import { getRightProfileUrl } from "@/utils/helper";
import BodyM from "@/elements/Text/BodyM";

type LinkProps = {
    name: string;
    links: string;
    icon: JSX.Element;
    index?: number| object | any;
    setLinks: React.Dispatch<React.SetStateAction<string>>;
    setIsLinkBoxOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setLinkUrl: React.Dispatch<React.SetStateAction<string>>;
};

function LinkPlatformItems({
                               name,
                               icon,
                               links,
                               index,
                               setLinks,
                               setIsLinkBoxOpen,
                               setLinkUrl,
                           }: LinkProps) {
    const { updateLink } = useLinks();

    function handleChangePlatform() {
        setLinks(name);
        setIsLinkBoxOpen(false);
        updateLink(index, { name, link: getRightProfileUrl(name)! });
        setLinkUrl(getRightProfileUrl(name)!);
    }
    return (
        <div
            className={`flex cursor-pointer items-center gap-3 border-b border-solid border-[#d9d9d9] pb-3 transition-none hover:text-[#633cff] ${
                links === name ? "text-[#633cff]" : "text-[#333]"
            }`}
            onClick={handleChangePlatform}
        >
            {icon}
            <BodyM text={name}/>
        </div>
    );
}

export default LinkPlatformItems;
