import "./Middlesection.css";
import RedButton from "../RedButton/RedButton";

function MiddleSection() {
  const loremText = `
  Есть много вариантов Lorem Ipsum, но большинство из них имеет не
  всегда приемлемые модификации, например, юмористические вставки или
  слова, которые даже отдалённо не напоминают латынь. Если вам нужен
  Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
  какой-нибудь шутки, скрытой в середине абзаца. Также все другие
  известные генераторы Lorem Ipsum используют один и тот же текст,
  который они просто повторяют, пока не достигнут нужный объём. Это
  делает предлагаемый здесь генератор единственным настоящим Lorem
  Ipsum генератором. Он использует словарь из более чем 200 латинских
  слов, а также набор моделей предложений. В результате
  сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет
  повторяющихся абзацей или "невозможных" слов.
`;

  return (
    <section className="middle-section">
      <div className="middle-section__first-block">
        <span className="first-block__bar"></span>
        <h2 className="first-block__title">
          <span className="first-block__title--highlight">LOREM IPSUM,</span>
          <br />
          LOREM IPSUM LOREM IPSUM
        </h2>
        <p className="first-block__description">
          Lorem Ipsum компании разработано с учётом анализа передовых
          технологий, использованием лучших решений и их качественной
          модернизации под потребности конкретного заказчика. Успешная
          реализация проектов на ведущих предприятиях горно-обогатительной
          промышленности базируется на многолетнем опыте и высоких компетенциях
          наших сотрудников.
        </p>
      </div>
      <div className="middle-section__second-block">
        <div className="second-block__image-wrapper">
          <div className="second-block__image"></div>
          <div className="second-block__button-wrapper">
            <RedButton
              className="max-[1205px]:!gap-5"
              containerClassName="max-[1205px]:!w-[14rem] max-md:!w-[11.8rem]"
              textClassName="max-[1205px]:!ps-17 max-[1205px]:!text-[12px] max-md:!py-3 max-md:!ps-14"
            >
              ПОДРОБНЕЕ
            </RedButton>
          </div>
        </div>
        <div className="second-block__text-wrapper">
          <h3 className="second-block__text-title">LOREM IPSUM</h3>
          <p className="second-block__text-content">{loremText}</p>
        </div>
      </div>
      <div className="middle-section__third-block">
        <div className="third-block__image-wrapper">
          <div className="third-block__image"></div>

          <div className="third-block__button-wrapper">
            <RedButton
              className="max-[1205px]:!gap-5"
              containerClassName="max-[1205px]:!w-[14rem] max-md:!w-[11.8rem]"
              textClassName="max-[1205px]:!ps-17 max-[1205px]:!text-[12px] max-md:!py-3 max-md:!ps-14"
            >
              ПОДРОБНЕЕ
            </RedButton>
          </div>
        </div>
        <div className="third-block__text-wrapper">
          <h3 className="third-block__text-title">LOREM IPSUM</h3>
          <p className="third-block__text-content">{loremText}</p>
        </div>
      </div>
    </section>
  );
}

export default MiddleSection;
