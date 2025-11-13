import React, {Suspense} from "react";
import styles from "./homepage.module.css";

const WssChat = React.lazy(() => import("chat_app/Chat"));

const Home = () => {
  return (
    <section className={styles.sectionField}>
      <h2 className={styles.textStyle}>This the home vite prehost</h2>
      <div className={styles.listWrapper}>
        <h2 className={styles.textStyle}>Other mf projects</h2>
        <ul>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
          <li>
            <Suspense fallback={<div>Loading . . .</div>}>
              {WssChat ? <WssChat /> : "Empty"}
            </Suspense>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Home;
