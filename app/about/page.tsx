import HeroSection from "../components/about/Hero";
import OutStorySection from "../components/about/OurStory";
import OurMissionSection from "../components/about/OurMission";
import FeatureSection from "../components/about/FeatureSection";
import OurPromiseSection from "../components/about/OurPromise";
import FollowSection from "../components/about/FollowSection";

export default function AboutPage(){
    return(
        <div className="relative">
            <HeroSection />
            <OutStorySection />
            <OurMissionSection />
            <OurPromiseSection />
            <FeatureSection />
            <FollowSection />
        </div>
    )
}