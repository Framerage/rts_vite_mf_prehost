import {Link, Route, Routes} from "react-router-dom";
import styles from "./appLayout.module.css";
import HomePage from "pages/home";
import ErrorPage from "pages/error";
import type {ReactElement} from "react";
import {LoginPage} from "pages/login";
import {PrivateRoom} from "pages/private_room";
import {Rooms} from "pages/rooms";
import {homePath} from "utils/routeConfig";
import {authStore} from "store/authStore";

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
  rooms: {link: `${homePath}/rooms`, component: Rooms},
  private_room: {link: `${homePath}/rooms/:id`, component: PrivateRoom},
  login: {link: `${homePath}/login`, component: LoginPage},
  error: {link: "*", component: ErrorPage},
};
//TODO: разделение саспенсов для отображения загрузки компонента и отдельно микрофронта
//TODO: обход модульных файлов стиля, попробовать @containers и @layer
//TODO: прикрутить Zustand для чего нибудь (тема)

export const AppLayout = () => {
  const user = authStore(s => s.user)?.toLocaleUpperCase();

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
        <div className={styles.contentHeader}>
          <h1>App header</h1>
          <p>{user}</p>
        </div>
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
