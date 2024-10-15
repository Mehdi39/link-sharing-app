import Input from "@/elements/Input";
import Dropdown from "@/elements/Dropdown";
import PhoneMockup from "@/components/PhoneMockup";
import LinksHome from "@/components/LinksHome";
import ProfileDetails from "@/components/ProfileDetails";


const Home = () => {
    return (
        <div>
            <main className="">
                <section className="flex lg:justify-between justify-center lg:gap-10 px-6 pb-6">
                    <div className="justify-center items-start w-full bg-pure_white lg:flex hidden py-[101px]">
                        <PhoneMockup/>
                    </div>
                    <div className="w-full lg:max-w-[808px] bg-pure_white">
                        <ProfileDetails />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home;
