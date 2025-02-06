/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Header.css";

function Header({ onSearchClick }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="header-wrapper">
      <header className="header">
        {/* Верхняя строка */}
        <div className="header__top-row">
          <nav className="header__nav">
            <ul className="header__nav-list top-row">
              <li className="header__nav-item">
                <button className="nav-button">Товары</button>{" "}
              </li>
              <li className={`header__nav-item ml-0 ${isSearchOpen ? "max-[1463px]:!hidden" : ''}`}>
                <button className="nav-button">Услуги</button>
              </li>
              <li className={`header__nav-item ${isSearchOpen ? "max-[1463px]:!hidden" : ''}`}>
                <button className="nav-button">Компания</button>
              </li>
            </ul>
          </nav>
          <div className="header__actions">
            <button className="header__bid-btn">Оставить заявку</button>
            <button className="header__contacts-btn">Контакты</button>

            {/* Иконка и строка поиска */}
            <div className="header__search">
              <button
                onClick={handleSearchToggle}
                className={`header__search-btn ${
                  isSearchOpen
                    ? "header__search-btn--hidden"
                    : "header__search-btn--visible"
                }`}
              >
                <img
                  src="/src/assets/search.svg"
                  alt="Поиск"
                  className="header__search-icon"
                />
              </button>

              <div
                className={`header__search-container ${
                  isSearchOpen
                    ? "header__search-container--open"
                    : "header__search-container--closed"
                }`}
              >
                <input
                  type="text"
                  placeholder="Поиск"
                  className={`header__search-input ${
                    isSearchOpen
                      ? "header__search-input--visible"
                      : "header__search-input--hidden"
                  }`}
                />
                <button
                  onClick={onSearchClick}
                  className={`header__search-submit ${
                    isSearchOpen
                      ? "header__search-submit--visible"
                      : "header__search-submit--hidden"
                  }`}
                >
                  <img
                    src="/src/assets/search.svg"
                    alt="Поиск"
                    className="header__search-submit-icon"
                  />
                  НАЙТИ
                </button>
              </div>
            </div>

            <button className="header__burger">
              <img src="/src/assets/menu-01.svg" alt="Меню" />
            </button>
            <button className="header__lang">EN</button>
          </div>
        </div>
        {/* Нижняя строка */}
        <div className="header__bottom-row">
          <nav className="header__nav">
            <ul className="header__nav-list bottom-row">
              <li className="header__nav-item ">
                <button className="nav-button">
                  <p className="nav-button-title">Флотомашины и чаны</p>
                </button>
              </li>
              <li className="header__nav-item">
                <button className="nav-button">
                  <p className="nav-button-title">Автоматизация</p>
                </button>
              </li>
              <li className="header__nav-item ml-5">
                <button className="nav-button active pr-19! ps-5!">
                  <p className="nav-button-title">SN</p>
                </button>
              </li>
            </ul>
          </nav>{" "}
        </div>
      </header>
    </div>
  );
}

export default Header;
