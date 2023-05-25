import addidas from '../assets/addidas.jpg';
import addidas2 from '../assets/addidas-logo.jpg';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="img-name">
          <img
            src={addidas}
            alt="picture of addidas sneakers"
            className="img1"
          />
          <h3>Adidda Sport wears</h3>
        </div>

        <div className="other-images">
          <img src={addidas2} alt="" className="img2" />
          <img src={addidas2} alt="" className="img2" />
          <img src={addidas2} alt="" className="img2" />
          <img src={addidas2} alt="" className="img2" />
          <img src={addidas2} alt="" className="img2" />
          <img src={addidas2} alt="" className="img2" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
