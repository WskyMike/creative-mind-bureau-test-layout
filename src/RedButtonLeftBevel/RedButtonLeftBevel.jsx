/* eslint-disable react/prop-types */
import "./RedButtonLeftBevel.css";
import link from "../assets/Vector11.svg";

const RedButtonLeftBevel = ({
  children = "Связаться с нами",
  onClick,
  className = "",
  textClassName = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`red-button-left__button ${className}`}
    >
      <p className={`red-button-left__text ${textClassName}`}>{children}</p>
      <img className="red-button-left__img" src={link} alt="ссылка" />
    </button>
  );
};

export default RedButtonLeftBevel;
