/* eslint-disable react/prop-types */
import "./TopSection.css";
import rickrollVideo from "../assets/rick-astley-never-gonna-give-you-up_362331.webm";
import link from "../assets/Vector11.svg";

function TopSection({ onOpenModal }) {

  return (
    <>
      {" "}
      <section className="top-section">
        <video
          className="top-section__video"
          src={rickrollVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="top-section__button-container">
          <button className="top-section__button" onClick={onOpenModal}>
            <p className="top__section__button-text">Связаться с нами</p>
            <img className="top__section__button-img" src={link} alt="ссылка" />
          </button>
        </div>
      </section>
    </>
  );
}

export default TopSection;
