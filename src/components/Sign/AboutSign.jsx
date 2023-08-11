const AboutSign = () => {
  const bannerData = {
    title: "Chez vous, partout et ailleurs",
    img: "chemin/vers/l'image.jpg",
  };

  return (
    <div>
      <h1> {bannerData.title} </h1>
      <img src={bannerData.img} alt={bannerData.img} />
    </div>
  );
};

export default AboutSign;
