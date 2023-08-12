import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

const Home = () => {
  const bannerData = {
    title: "Chez vous, partout et ailleurs",
    img: "src/img/Banniere-accueil.png",
  };

  return (
    <>
      <Banner {...bannerData} />
      <Gallery />
    </>
  );
};

export default Home;
