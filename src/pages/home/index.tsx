import styles from "./homepage.module.css";
import DotLoader from "components/dotLoader";

const Home = () => {
  console.log("render home");
  return (
    <section className={styles.sectionField}>
      <h2 className={styles.headline}>It's the home vite prehost</h2>
      <div className={styles.testContainer}>
        <DotLoader
          loaderHeight={100}
          loaderWidth={100}
          dotWidth={8}
          dotHeight={8}
        />
      </div>
    </section>
  );
};
export default Home;
