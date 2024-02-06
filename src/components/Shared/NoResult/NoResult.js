import styles from "./NoResult.module.scss";

export function NoResult(props) {
  const { text } = props;

  return (
    <div className={styles.noResult}>
      <h3>¡Opps! Lo sentimos...</h3>
      <p>{text}</p>
    </div>
  );
}
