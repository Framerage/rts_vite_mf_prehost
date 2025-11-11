import type { ReactElement } from "react";

export const AppWrapper: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  return <>{children}</>;
};
