// import PointLoader from "components/pointLoader";
import {Suspense, type ReactElement} from "react";

export const SuspenseWrapper = ({children}: {children: ReactElement}) => {
  return (<Suspense 
//   fallback={<PointLoader scale={0.1} />}
  fallback={<div>Loading . . .</div>}
  >
  {children}
  </Suspense>)
}
