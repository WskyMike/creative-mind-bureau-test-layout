/* eslint-disable react/prop-types */
import "./RedButton.css";
import link from "../assets/Vector11.svg";

const RedButton = ({
  children = "Связаться с нами",
  onClick,
  className = "",
  containerClassName = "",
  textClassName = "",
}) => {
  return (
    <div className={`red-button__container ${containerClassName}`}>
      <button onClick={onClick} className={`red-button__button ${className}`}>
        <p className={`red-button__text ${textClassName}`}>{children}</p>{" "}
        <img className="red-button__img" src={link} alt="ссылка" />
      </button>
    </div>
  );
};

export default RedButton;
