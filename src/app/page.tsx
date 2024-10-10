import Img from "@/elements/Img";
import TextField from "@/elements/Input";
import SocialButton from "@/elements/SocialButton";
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

// internal imports
import Button from "@/elements/Button";
import CustomLink from "@/elements/CustomLink";
import Dropdown from "@/elements/Dropdown";
import Login from "@/app/login/page";
import SignUp from "@/app/sign-up/page";
import ProfileCard from "@/components/ProfileCard";
import PhoneMockup from "@/components/PhoneMockup";

export default function Home() {
  return (
    <div className="">
        <main className="flex flex-wrap gap-8 row-start-2 items-center sm:items-start p-10">
            <div>
                <Img/>
            </div>
            <div>
                <div className="space-y-6">
                    <TextField placeholder="Text Field Empty" state="empty"/>
                    <TextField placeholder="Text Field Filled" state="filled"/>
                    <TextField placeholder="Text Field Active" state="active"/>
                    <TextField placeholder="Text Field Error" state="error" errorMessage="Please check again"/>
                </div>
            </div>
            <div>
                <h1 className="text-red-700 text-2xl leading-relaxed font-thin italic">Hello World!</h1>
                <h1 className="text-red-700 text-2xl font-extralight">Hello World!</h1>
                <h1 className="text-red-700 text-2xl font-light">Hello World!</h1>
                <h1 className="text-red-700 text-body-m font-normal">Hello World!</h1>
                <h1 className="text-red-700 text-body-s font-medium">Hello World!</h1>
                <h1 className="text-red-700 text-heading-m font-semibold italic underline">Hello World!</h1>
                <h1 className="text-red-700 text-heading-s font-bold underline">Hello World!</h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <SocialButton
                    icon={<FaGithub className="w-6 h-6"/>}
                    buttonTitle="GitHub"
                    color="#181717"
                />
                <SocialButton
                    icon={<FaTwitter className="w-6 h-6"/>}
                    buttonTitle="Twitter"
                    color="#1DA1F2"
                />
                <SocialButton
                    icon={<FaLinkedin className="w-6 h-6"/>}
                    buttonTitle="LinkedIn"
                    color="#0077B5"
                />
                <SocialButton
                    icon={<FaYoutube className="w-6 h-6"/>}
                    buttonTitle="YouTube"
                    color="#FF0000"
                />
            </div>

            <div className="bg-gray-50 flex flex-col items-center justify-center space-y-4">
                {/* Primary Buttons */}
                <div className="flex space-x-10 border">
                    <Button title="Button" buttonType="primary"/>
                    <Button title="Button" buttonType="primary" isActive/>
                    <Button title="Button" buttonType="primary" isDisabled/>
                </div>
                {/* Secondary Buttons */}
                <div className="flex space-x-4">
                    <Button title="Button" buttonType="secondary"/>
                    <Button title="Button" buttonType="secondary" isActive/>
                    <Button title="Button" buttonType="secondary" isDisabled/>
                </div>
            </div>
            <div className="bg-gray-50 flex space-x-10 items-center justify-center space-y-4">
                {/* Active Link */}
                <CustomLink title="Active" isActive/>
                {/* Default Link */}
                <CustomLink title="Default"/>
                {/* Hover Link (simply hover over it to see the effect) */}
                <CustomLink title="Hover"/>
            </div>
            <div className="bg-gray-50 flex items-center justify-center">
                <Dropdown/>
            </div>
            <div className="flex border min-w-screen justify-center items-center py-10">
                <Login/>
                <SignUp/>
            </div>
            <div>
                <ProfileCard />
            </div>
            <div>
                <PhoneMockup/>
            </div>
        </main>
    </div>
  );
}
