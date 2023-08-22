import Banner from "../components/Banner";
import CollapseList from "../components/CollapseList";
// import "../styles/pages/About.scss";

const About = () => {
  const bannerData = {
    title: "",
    img: "src/img/Banniere-apropos.png",
  };

  return (
    <>
      <Banner {...bannerData} />
      <CollapseList />
    </>
  );
};

export default About;
