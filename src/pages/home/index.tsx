import {lazy, Suspense, useEffect, useRef} from "react";
import styles from "./homepage.module.css";
import DotLoader from "components/dotLoader";
import {ErrorBoundary} from "react-error-boundary";
import {FailedLoadContent} from "components/failedLoadContent";
// const VueMainPage = lazy(() => import("child_main_page/SharedMainPage"));
const SharedMainPage = lazy(() => import("child_main_page/SharedMainPage"));
// import SharedMainPage from "child_main_page/SharedMainPage";
// await import {createApp} from "child_main_page/vue";
const fetchVue = async () => (await import("child_main_page/vue")).default;
const vue = await fetchVue();
const VueComponentWrapper = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const component = vue?.createApp(SharedMainPage);
    component.mount(divRef.current);
    return () => {
      component.unmount();
    };
  });

  return <div ref={divRef}></div>;
};
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
      <ErrorBoundary fallback={<FailedLoadContent />}>
        <Suspense fallback={<div> vue is loading ... </div>}>
          <VueComponentWrapper />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
};
export default Home;
