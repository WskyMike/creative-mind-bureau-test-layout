/* eslint-disable react/prop-types */
import "./Footer.css";
import RedButtonLeftBevel from "../RedButtonLeftBevel/RedButtonLeftBevel";
import geo from "../assets/geo.svg";

function Footer({ onOpenModal }) {
  return (
    <footer className="footer">
      <span className="footer__bar-above"></span>
      <div className="footer__container">
        {/* Блок "Товары" */}
        <div className="footer__column footer__column--products">
          <h3 className="footer__title">Товары</h3>
          <span className="footer__bar-mini"></span>
          <div className="footer__list">
            <h4 className="footer__list-title">Флотомашины и чаны</h4>
            <ul className="footer__item-wrapper">
              <li className="footer__item">МП</li>
              <li className="footer__item">ЧП</li>
              <li className="footer__item">ЧКЗ</li>
              <li className="footer__item">Нестандартное Lorem Ipsum</li>
            </ul>
          </div>
          <div className="footer__list">
            <h4 className="footer__list-title">Автоматизация</h4>
            <ul className="footer__item-wrapper">
              <li className="footer__item footer__item-title">Локальные АСУ</li>
              <li className="footer__item">РУВ</li>
              <li className="footer__item">SD</li>
              <li className="footer__item">SC</li>
              <li className="footer__item">SK</li>
              <li className="footer__item">SP</li>
              <li className="footer__item footer__item-title asutp">АСУТП</li>
              <li className="footer__item footer__item-title">
                Интеллектуальные системы
              </li>
              <li className="footer__item footer__item--highlight">SN</li>
              <li className="footer__item">SV</li>
              <li className="footer__item">SP</li>
            </ul>
          </div>
        </div>

        {/* Блок "Услуги" */}
        <div className="footer__column footer__column--services">
          <h3 className="footer__title">Услуги</h3>
          <span className="footer__bar-mini"></span>
          <div className="footer__list">
            <ul className="footer__item-wrapper">
              <li className="footer__item">
                Технологические исследования и аудит
              </li>
              <li className="footer__item">Проектирование</li>
              <li className="footer__item">Строительно-монтажные работы</li>
            </ul>
          </div>
          <div className="footer__list">
            <h4 className="footer__list-title">Сервисное сопровождение</h4>
            <ul className="footer__item-wrapper">
              <li className="footer__item">Сервис</li>
              <li className="footer__item">Технологическая поддержка</li>
            </ul>
          </div>
        </div>

        {/* Блок "Компания" */}
        <div className="footer__column footer__column--company">
          <h3 className="footer__title">Компания</h3>
          <span className="footer__bar-mini"></span>
          <div className="footer__list">
            <ul className="footer__item-wrapper">
              <li className="footer__item">Новости и события</li>
              <li className="footer__item">Проекты</li>
              <li className="footer__item">Карьера</li>
              <li className="footer__item">Отзывы заказчиков</li>
              <li className="footer__item">Документы</li>
            </ul>
          </div>
          <h4 className="footer__list-title">Контакты</h4>
        </div>

        {/* Блок "Контакты" */}
        <div className="footer__column footer__column--contacts">
          <div className="footer__contacts">
            <span className="footer__icon-wrapper">
              <img src={geo} alt="гео" />
            </span>
            <div className="footer__contacts-text-wrapper">
              <div className="footer__contacts-text-wrapper--left">
                <p className="footer__contacts-text">г. Санкт-Петербург,</p>
                <p className="footer__contacts-text">
                  119186, Большой проспект Васильевского острова, дом 7. Литера
                  З
                </p>
              </div>
              <div className="footer__contacts-text-wrapper--right">
                <p className="footer__contacts-text number">
                  8 (800) 555-35-35
                </p>
                <p className="footer__contacts-text">info@info.ru</p>
              </div>
            </div>
          </div>
          <div className="footer__button-container">
            <RedButtonLeftBevel
              onClick={onOpenModal}
              className="max-[1312px]:!w-[11.6rem] max-[1312px]:!gap-3"
              textClassName="max-[1312px]:!text-[13px] max-[1312px]:!py-4 max-[1312px]:!ps-2"
            >
              ОСТАВИТЬ ЗАЯВКУ
            </RedButtonLeftBevel>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">
          Сделано в{" "}
          <span className="footer__highlight">Creative Mind Bureau</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
