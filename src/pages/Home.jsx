import Banner from "../components/Banner";

const Home = () => {
  const bannerData = {
    title: "Chez vous, partout et ailleurs",
    img: "src/img/Banniere-accueil.png",
  };

  return <Banner {...bannerData} />;
};

export default Home;
