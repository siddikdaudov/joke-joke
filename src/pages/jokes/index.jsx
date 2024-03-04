import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Cards } from "../../shared/ui";
import { useDebounce } from "../../shared";
import { getJokesThunk } from "../../app/store/reducers/jokes/thunks";
import styles from "./styles.module.css";

export const JokesPage = () => {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.jokes.total);

  const [joke, setJoke] = useState("");
  const debouncedJoke = useDebounce(joke, 300);

  useEffect(() => {
    if (debouncedJoke && debouncedJoke.length > 3) {
      dispatch(getJokesThunk(debouncedJoke.toUpperCase()));
    }
  }, [debouncedJoke, dispatch]);

  return (
    <main className={styles.page}>
      <div>
        <Input value={joke} onChange={(e) => setJoke(e.target.value)} placeholder="Search jokes..." />
        {debouncedJoke && <p className={styles.count}>Found jokes: {total}</p>}
      </div>
      <Cards />
    </main>
  );
};
