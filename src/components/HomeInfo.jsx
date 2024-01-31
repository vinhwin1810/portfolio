import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} />
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-sung text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi I am <span className="font-semibold">Win</span> <br /> A software
      engineer from USA
    </h1>
  ),
  2: (
    <InfoBox
      text="fucked all the girls in the world"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: <h1 className="text-4xl font-bold text-white">3</h1>,
  4: <h1 className="text-4xl font-bold text-white">4</h1>,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
