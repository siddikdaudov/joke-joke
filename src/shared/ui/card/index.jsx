import styles from "./styles.module.css";

export const Card = (props) => {
  return (
    <li className={styles.card}>
      <a href={props.url} target="_blank" />
      <p className={styles.joke}>{props.value}</p>
      <div className={styles.footer}>
        <p>{props.id}</p>
        <p>{new Date(props.created_at).toLocaleDateString()}</p>
      </div>
    </li>
  );
};
