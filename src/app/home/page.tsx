import Input from "@/elements/Input";
import Dropdown from "@/elements/Dropdown";


const Home = () => {
    return (
        <section className="flex ">
            <Input placeholder="Hello" state="active" />
            <Dropdown />
        </section>
    )
}

export default Home;
