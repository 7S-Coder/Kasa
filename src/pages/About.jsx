import Banner from "../components/Banner";

const About = () => {
  const bannerData = {
    title: "",
    img: "src/img/Banniere-apropos.png",
  };

  return <Banner {...bannerData} />;
};

export default About;
