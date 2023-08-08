import GreetingBlock from "../GreetingComp/GreetingComp";
import DetailedInf from "../DetailedInfComp/DetailedInf";
import HireSection from "../HireSection/HireSection";
import Footer from "../FooterComp/Footer";

export default function MainAboutWrapper() {
  return (
    <div className="AboutWrapper">
      <GreetingBlock></GreetingBlock>
      <DetailedInf></DetailedInf>
      <HireSection></HireSection>
      <Footer></Footer>
    </div>
  );
}
