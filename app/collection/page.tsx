import CollectionGrid from "../components/collection/CollectionGrid";
import HeroSection from "../components/collection/Hero";

export default function CollectionPage(){
    return(
        <>
        <HeroSection />
        <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-14 lg:py-20">
            <CollectionGrid />
        </section>
        </>
    )
}