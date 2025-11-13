import {Link, Route, Routes} from "react-router-dom";
import styles from "./appLayout.module.css";
import HomePage from "pages/home";
import ErrorPage from "pages/error";
import {homePath} from "utils/routeConfig";
import type {ReactElement} from "react";

const ROUTES: {
  [key: string]: {
    link: string;
    component: () => ReactElement;
    index?: boolean;
  };
} = {
  main: {
    link: `${homePath}/`,
    component: HomePage,
    index: true,
  },
  //   rooms: {link: `${homePath}/catalog`, component: Catalog},

  //   login: {link: `${homePath}/auth/login`, component: LoginPage},
  error: {link: "*", component: ErrorPage},
};
//TODO: разделение саспенсов для отображения загрузки компонента и отдельно микрофронта
//TODO: обход модульных файлов стиля, попробовать @containers и @layer
//TODO: прикрутить Zustand для чего нибудь (тема)

export const AppLayout = () => {
  return (
    <main className={styles.appWrapper}>
      <nav className={styles.appNav}>
        <ul>
          <li>
            <Link to={homePath}>Home</Link>
          </li>
          <li>
            <Link to={`${homePath}/rooms`}>Rooms</Link>
          </li>
          <li>
            <Link to={`${homePath}/login`}>Login</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.contentWrapper}>
        <div className={styles.contentHeader}>App header</div>
        <section className={styles.contentEntries}>
          <Routes>
            {Object.values(ROUTES).map(r => (
              <Route
                key={r.link}
                path={r.link}
                index={r.index}
                Component={r.component}
              />
            ))}
          </Routes>
        </section>
      </div>
    </main>
  );
};
