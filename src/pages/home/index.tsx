import Footer from "./components/Footer";
import Hero from "./components/Hero"
import IconBurst from "./components/IconBurst"
import Testinomial from "./components/Testinomial";

const Home = () => {
    return <>
        <div className="w-screen overflow-hidden">
            <Hero />
            <IconBurst />
            <Testinomial />
            <Footer />
        </div>
    </>
}

export default Home