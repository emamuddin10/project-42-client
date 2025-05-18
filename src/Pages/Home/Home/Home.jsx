import Counter from "../../../components/Home/Counter";
import HowItWorks from "../../../components/Home/HowItWorks";
import MarriageReview from "../../../components/Home/MarriageReview";
import MatrimonyBanner from "../../../components/Home/MatrimonyBanner";
import PremiumBiodatas from "../../../components/Home/PremiumBiodatas";


const Home = () => {
    return (
        <div>
          <MatrimonyBanner></MatrimonyBanner>
          <PremiumBiodatas></PremiumBiodatas>
          <HowItWorks></HowItWorks>
          <Counter></Counter>
          <MarriageReview></MarriageReview>
        </div>
    );
};

export default Home;