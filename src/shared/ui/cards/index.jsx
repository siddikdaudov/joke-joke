import { useSelector } from "react-redux";
import { Card } from "../card";
import styles from "./styles.module.css";

export const Cards = () => {
  const jokes = useSelector((state) => state.jokes.jokes);
  const isLoading = useSelector((state) => state.jokes.isLoading);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  return (
    <ul className={styles.cards}>
      <div className={styles.header}>
        {jokes?.map((joke, index) => (index < 2 ? <Card key={joke.id} {...joke} /> : null))}
      </div>
      <div className={styles.other}>
        {jokes?.map((joke, index) => (index > 2 ? <Card key={joke.id} {...joke} /> : null))}
      </div>
    </ul>
  );
};
