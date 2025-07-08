import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/atoms/Loading.jsx";

const Layout = lazy(() => import("./Layout.jsx"));
const Pokemons = lazy(() => import("./pages/Pokemons.jsx"));
const Game = lazy(() => import("./pages/Game.jsx"));
const ErrorPage = lazy(() => import("./pages/ErrorPage.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Pokemons />} />
            <Route path="/game" element={<Game />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
