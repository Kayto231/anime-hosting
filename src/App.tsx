import React, { useEffect } from "react";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { FetchAnimeListFunction } from "./redux/actions/userReducerAction/userReducerAction";
import { useAction } from "./hooks/useActions";
import Footer from "./components/Footer/Footer";

function App<FC>(): React.ReactElement {
  const { animeList, error, isLoading } = useTypedSelector(
    (state) => state.anime
  );
  const { FetchAnimeListFunction } = useAction();

  useEffect(() => {
    FetchAnimeListFunction();
  }, []);
  return (
    <BrowserRouter>
      <div className="wrapper">
        <NavBar />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
