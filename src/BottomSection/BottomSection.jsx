import "./BottomSection.css";
import link from "../assets/Vector11.svg";
import zavod from "../assets/zavod.webp";

function BottomSection() {
  return (
    <section className="bottom-section">
      <div className="bottom-section__image-wrapper">
        <img className="bottom-section__img" src={zavod} alt="завод" />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="bottom-section__text-overlay">
          <h3 className="bottom-section__head">SN</h3>
          <p className="bottom-section__text">
            Помогает повысить извлечение за счет поддержания оптимальных
            дозировок реагентов в ключевых точках процесса
          </p>
        </div>
      </div>

      <div className="bottom-section__button-container">
        <button className="bottom-section__button">
          <p className="bottom-section__button-text">ПОДРОБНЕЕ</p>
          <img className="bottom-section__button-img" src={link} alt="ссылка" />
        </button>
      </div>
    </section>
  );
}

export default BottomSection;
