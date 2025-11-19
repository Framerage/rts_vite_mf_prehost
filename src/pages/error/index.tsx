import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {homePath} from "utils/routeConfig";

const ErrorPage = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    if (timer === 0) {
      navigate(`/${homePath}`);
      return;
    }
    setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  return (
    <div>
      <h1>Page not found</h1>
      <h2>404</h2>
      <p> Will return to "Main page" at:&nbsp;{timer}&nbsp;...</p>
    </div>
  );
};
export default ErrorPage;
