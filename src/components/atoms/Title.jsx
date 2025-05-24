import styles from "./Title.module.css";

function Title({ title, style }) {
  return <h2 className={styles[style]}>{title}</h2>;
}

export default Title;
