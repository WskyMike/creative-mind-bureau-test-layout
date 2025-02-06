/* eslint-disable react/prop-types */
import "./PromoSection.css";
import RedButtonLeftBevel from "../RedButtonLeftBevel/RedButtonLeftBevel";

function PromoSection({ onOpenModal }) {
  return (
    <section className="promo-section">
      <div className="promo-section__content">
        <h4 className="promo-section__text">
          Мы реализуем под ключ проекты любой сложности
        </h4>
        <div className="promo-section__button-wrapper">
          <RedButtonLeftBevel
            onClick={onOpenModal}
            className="max-[1205px]:!w-[11.5rem]"
            textClassName="max-[1205px]:!py-4 !text-[12px] !leading-[12px]"
          >
            Оставить заявку
          </RedButtonLeftBevel>
        </div>
      </div>
    </section>
  );
}

export default PromoSection;
