import Home from "@/Home";
import NotFound from "@/pages/NotFound/NotFound";

// Games
import ShapeOfDreams from "@/pages/games/ShapeOfDreams";
import HollowKnightSilksong from "@/pages/games/HollowKnightSilksong";
import LostSoulAsideDeluxeEdition from "@/pages/games/LostSoulAsideDeluxeEdition";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/games/shape-of-dreams", element: <ShapeOfDreams /> },
  { path: "/games/hollow-knight-silksong", element: <HollowKnightSilksong /> },
  { path: "/games/lost-soul-aside-deluxe-edition", element: <LostSoulAsideDeluxeEdition /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
