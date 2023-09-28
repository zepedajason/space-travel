import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";

import styles from "./App.module.css";
import { LoadingContext } from "./context/LoadingProvider";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AppRoute from "./routes/AppRoute";
import Motto from "./components/Motto/Motto";
import Loading from "./components/Loading/Loading";

function App() {
  const { isLoading } = useContext(LoadingContext);
  function clearLocalStorage() {
    localStorage.clear();
  }

  return (
    <>
      {
        // todo wrap with BrowserRouter and render the necessary components
        <BrowserRouter>
          <div className={styles["app"]}>
            <header className={styles["app__header"]}>
              <NavigationBar />
            </header>

            <main className={styles["app__main"]}>
              <AppRoute />
            </main>

            <footer className={styles["app__footer"]}>
              <button onClick={clearLocalStorage}>Clear Storage</button>
              <Motto />
            </footer>
          </div>
        </BrowserRouter>
      }

      {
        // todo render Loading based on its condition
        isLoading && <Loading />
      }
    </>
  );
}

export default App;
