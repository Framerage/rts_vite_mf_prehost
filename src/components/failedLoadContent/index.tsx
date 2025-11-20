import styles from "./failed_load.module.css";
export const FailedLoadContent = ({
  onRepeatLoad,
}: {
  onRepeatLoad?: () => void;
}) => {
  return (
    <div className={styles.failedContent} onClick={onRepeatLoad}>
      <p> Something wrong. </p>
      <p role="icon">&#10071; </p>
      <p>Failed load extra content</p>
    </div>
  );
};
