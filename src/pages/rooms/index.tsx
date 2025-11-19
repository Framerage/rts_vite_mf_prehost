import {Link} from "react-router-dom";
import styles from "./rooms.module.css";

export const Rooms = () => {
  return (
    <div className={styles.listWrapper}>
      <h2 className={styles.textStyle}>Rooms</h2>
      <ul>
        <li>
          <Link to={`:1`}>Room 1</Link>
        </li>
        <li>
          <Link to={`:2`}>Room 2</Link>
        </li>
        <li>
          <Link to={`:3`}>Room 3</Link>
        </li>
        <li>
          <Link to={`:4`}>Room 4</Link>
        </li>
      </ul>
    </div>
  );
};
