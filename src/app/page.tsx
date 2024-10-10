import Img from "@/app/components/Img";
import TextField from "@/app/components/Input";
import SocialButton from "@/app/components/SocialButton";
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
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
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center bg-amber-300 h-10 w-full">

        </footer>
    </div>
  );
}
