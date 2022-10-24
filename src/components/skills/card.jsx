import style from "./card.module.css";

const Card = function ({ children }) {
  return (
    <>
      <div className={style.card}>
        <div className={style.content}>{children}</div>
      </div>

    </>
  );
};

export default Card;
