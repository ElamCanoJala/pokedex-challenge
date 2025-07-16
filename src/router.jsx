import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";

import Layout from "./Layout.jsx";
import Pokemons from "./pages/Pokemons.jsx";
import Game from "./pages/Game.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Loading from "./components/atoms/Loading.jsx";
import { getPokemonDetailsBatch } from "../api/getPokemon.js";
import { formatPokemonList } from "./utils/formatPokemon.js";

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
        loader: async () => {
          const INITIAL_LIMIT = 40;
          const offset = 0;

          const data = await getPokemonDetailsBatch(INITIAL_LIMIT, offset);
          const formatted = formatPokemonList(data);

          return {
            pokemons: formatted,
            offset: INITIAL_LIMIT,
          };
        },
      },
      {
        path: "game",
        element: <Game />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
