import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const [{ default: Layout }, { default: Pokemons }, { pokemonsLoader }] =
        await Promise.all([
          import("./Layout.jsx"),
          import("./pages/Pokemons.jsx"),
          import("./loaders/pokemonsLoader.js"),
        ]);

      return {
        element: (
          <Layout>
            <Pokemons />
          </Layout>
        ),
        loader: pokemonsLoader,
        errorElement: <div>Ocurrió un error al cargar la página</div>,
      };
    },
  },
  {
    path: "/game",
    lazy: async () => {
      const [{ default: Layout }, { default: Game }] = await Promise.all([
        import("./Layout.jsx"),
        import("./pages/Game.jsx"),
      ]);

      return {
        element: (
          <Layout>
            <Game />
          </Layout>
        ),
      };
    },
  },
  {
    path: "/pokemon/:number",
    lazy: async () => {
      const [{ default: Layout }, { default: PokemonDetail }] =
        await Promise.all([
          import("./Layout.jsx"),
          import("./pages/PokemonDetail.jsx"),
        ]);

      return {
        element: (
          <Layout>
            <PokemonDetail />
          </Layout>
        ),
      };
    },
  },
  {
    path: "*",
    element: (await import("./pages/ErrorPage.jsx")).default(),
  },
]);

export default router;
