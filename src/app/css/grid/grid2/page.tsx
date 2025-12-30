import Footer from "./ui/Footer";
import Navigation from "./ui/Navigation";
import Section from "./ui/Section";

export default function Page(){

    return(
        <div className="w-[100vw] h-[100vh] text-4xl grid grid-cols-[repeat(10,minmax(0,10vw))] grid-rows-[repeat(10,minmax(0,10vh))] gap-0.5">
            <Navigation />
            <Section />
            <Footer />
        </div>
    )
}