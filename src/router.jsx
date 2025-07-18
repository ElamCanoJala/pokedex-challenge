import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";

import Layout from "./Layout.jsx";
import Pokemons from "./pages/Pokemons.jsx";
import Game from "./pages/Game.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Loading from "./components/atoms/Loading.jsx";
import PokemonDetail from "./pages/PokemonDetail.jsx";
import { pokemonsLoader } from "./loaders/pokemonsLoader.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Layout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Pokemons />,
        loader: pokemonsLoader,
      },
      {
        path: "game",
        element: <Game />,
      },
      {
        path: "pokemon/:number",
        element: <PokemonDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
