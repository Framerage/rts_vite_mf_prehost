import {lazy, Suspense} from "react";
import styles from "./room.module.css";

const WssChat = lazy(() => import("chat_app/Chat"));
export const PrivateRoom = () => {
  return (
    <div className={styles.roomWrapper}>
      <div className={styles.roomContent}>Draw and chat</div>
      <Suspense fallback={<div>Loading . . .</div>}>
        {WssChat ? <WssChat /> : "Empty"}
      </Suspense>
    </div>
  );
};
