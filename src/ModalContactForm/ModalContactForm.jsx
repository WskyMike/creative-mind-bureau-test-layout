/* eslint-disable react/prop-types */
import "./ModalContactForm.css";
import RedButtonLeftBevel from "../RedButtonLeftBevel/RedButtonLeftBevel";
import { useState } from "react";

function ModalContactForm({ onCloseModal }) {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
  });
  const MAX_FILE_SIZE_MB = 5;
  const MAX_FILES = 3;
  const ALLOWED_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/svg",
    "image/png",
    "image/webp",
    "image/gif",
    "application/pdf",
  ];

  // Проверка заполненности всех полей
  const isAllFieldsFilled = Object.values(formData).every(
    (field) => field.trim() !== ""
  );

  // Проверка возможности активации кнопки
  const isFormValid = isAllFieldsFilled && files.length > 0 && !error;

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "phone") {
      // Убираем все нецифровые символы
      const phoneValue = value.replace(/\D/g, "");
      // Ограничиваем количество цифр до 11
      const limitedPhoneValue = phoneValue.slice(0, 11);
      // Форматируем номер телефона
      const formattedPhone = formatPhoneNumber(limitedPhoneValue);
      setFormData((prev) => ({
        ...prev,
        [id]: formattedPhone,
      }));
    } else {
      // Для остальных полей
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  // Функция форматирования телефона
  const formatPhoneNumber = (value) => {
    const formattedValue = value.replace(
      /(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/,
      "+$1 $2 $3 $4 $5"
    );
    return formattedValue.trim();
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setError(null);

    // Проверка количества файлов
    if (files.length + selectedFiles.length > MAX_FILES) {
      setError(`Максимальное количество файлов - ${MAX_FILES}`);
      return;
    }

    // Проверка типов
    const invalidTypes = selectedFiles.filter((file) => {
      return !ALLOWED_TYPES.includes(file.type);
    });
    if (invalidTypes.length > 0) {
      setError("Недопустимый Формат Файла (только картинки и PDF)");
      return;
    }

    // Проверка размера файлов
    const invalidSize = selectedFiles.filter((file) => {
      return file.size > MAX_FILE_SIZE_MB * 1024 * 1024;
    });
    if (invalidSize.length > 0) {
      setError("Слишком большой объем файла (>5мб)");
      return;
    }

    // Добавляем только валидные файлы
    setFiles((prev) => [...prev, ...selectedFiles].slice(0, MAX_FILES));
  };

  // Функция для вывода текста в зависимости от количества файлов
  const getFileCounterText = () => {
    const fileIcon = (
      <img
        src="/src/assets/file.svg"
        alt="файл иконка"
        className="inline-block mr-2"
      />
    );

    if (files.length === 0) return "Приложить файлы (до трёх файлов)";
    const count = files.length;
    if (count === 1)
      return (
        <>
          {fileIcon}Загружен {count} файл
        </>
      );
    if (count >= 2 && count <= 3)
      return (
        <>
          {fileIcon}Загружено {count} файла
        </>
      );
    return (
      <>
        {fileIcon}Загружено {count} файлов
      </>
    );
  };

  return (
    <section className="modal">
      <div className="modal__overlay" onClick={onCloseModal}></div>
      <div className="modal__container">
        <button className="modal__close" aria-label="Закрыть" onClick={onCloseModal}>
          <img src="/src/assets/x-02.svg" alt="закрыть" />
        </button>
        <h2 className="modal__title">
          Успех начинается с правильных решений. Оставьте здесь свои контакты, и
          мы свяжемся с вами, чтобы предложить оптимальную технологию по
          увеличению процента извлекаемости полезного в конечный продукт на
          вашем предприятии.
        </h2>
        <form className="modal__form">
          <div className="modal__field">
            <input
              type="text"
              id="name"
              maxLength={50} 
              className="modal__input"
              placeholder=" "
              onChange={handleInputChange}
              value={formData.name}
            />
            <label htmlFor="name" className="modal__label">
              Имя*
            </label>
          </div>
          <div className="modal__field">
            <input
              type="email"
              id="email"
              maxLength={50} 
              className="modal__input"
              placeholder=" "
              onChange={handleInputChange}
              value={formData.email}
            />
            <label htmlFor="email" className="modal__label">
              E-Mail*
            </label>
          </div>
          <div className="modal__field">
            <input
              type="tel"
              id="phone"
              className="modal__input"
              placeholder=" "
              onChange={handleInputChange}
              value={formData.phone}
            />
            <label htmlFor="phone" className="modal__label">
              Телефон*
            </label>
          </div>
          <div className="modal__field">
            <input
              id="project"
              className="modal__input cursor-pointer"
              maxLength={300} 
              placeholder=" "
              onChange={handleInputChange}
              value={formData.project}
            />
            <label htmlFor="project" className="modal__label">
              Описание проекта*
            </label>
          </div>

          <div className="modal__field">
            <div className={`input-file-wrapper ${error ? "error" : ""}`}>
              <input
                type="file"
                id="file"
                className="hidden"
                multiple
                onChange={handleFileChange}
                // disabled={files.length >= MAX_FILES}
              />
              <label
                htmlFor="file"
                className={`modal__input input-file cursor-pointer ${
                  error ? "border-[#B21F24]" : ""
                }`}
              >
                <span className="invisible">Выберите файл</span>
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`input-file-img ${
                    error ? "stroke-[#B21F24]" : "stroke-[#614D49]"
                  }`}
                >
                  <path d="M16.5101 5.13304L9.41022 12.2329C8.56597 13.0772 7.19717 13.0772 6.35292 12.2329C5.5069 11.3869 5.50893 10.0146 6.35745 9.17108L11.8632 3.69785L13.2459 2.31518C14.9282 0.632837 17.6558 0.632838 19.3381 2.31518C21.0205 3.99751 21.0205 6.72512 19.3381 8.40746L17.9763 9.76934L12.8148 14.9309C10.1448 17.712 6.09921 18.1352 3.27061 15.4197C0.476637 12.7375 0.950206 8.71628 3.7752 5.89129L8.91637 0.749329" />
                </svg>
              </label>
            </div>
            {/* Вывод текста/ошибок */}
            {error ? (
              <label htmlFor="file" className="modal__label text-[#B21F24]">
                {error}
              </label>
            ) : (
              <label htmlFor="file" className="modal__label cursor-pointer">
                {getFileCounterText()}
              </label>
            )}
          </div>

          <p className="modal__privacy">
            Отправляя эту форму, я принимаю{" "}
            <a href="#" className="modal__privacy-link">
              политику конфиденциальности
            </a>{" "}
            этого сайта.
          </p>
          <div className="modal__button-container">
            {" "}
            <RedButtonLeftBevel
              className={`!w-[11rem] ${
                isFormValid ? "!bg-[#B21F24]" : "!bg-[#CFCFCF] !cursor-default"
              }`}
              textClassName="!py-4"
              disabled={!isFormValid}
            >
              ОТПРАВИТЬ
            </RedButtonLeftBevel>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ModalContactForm;
