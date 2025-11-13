import {BrowserRouter} from "react-router-dom";
import {AppLayout} from "components/appLayout";

export const App = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};
