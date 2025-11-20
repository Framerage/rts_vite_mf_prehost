import {lazy, Suspense} from "react";
import styles from "./room.module.css";
import {ErrorBoundary} from "react-error-boundary";
import {FailedLoadContent} from "components/failedLoadContent";
import DotLoader from "components/dotLoader";

const WssChat = lazy(() => import("chat_app/Chat"));
export const PrivateRoom = () => {
  return (
    <div className={styles.roomWrapper}>
      <div className={styles.roomContent}>Draw and chat</div>
      <div className={styles.roomExtraContent}>
        <ErrorBoundary fallback={<FailedLoadContent />}>
          <Suspense
            fallback={
              <DotLoader
                loaderHeight={100}
                loaderWidth={100}
                dotWidth={8}
                dotHeight={8}
              />
            }
          >
            <WssChat />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
