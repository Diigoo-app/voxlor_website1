import { useRoutes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import HowtoBuy from "./Pages/HowtoBuyPage";
import TokenomicsPage from "./Pages/TokenomicsPage";
import FaqsPage from "./Pages/FaqsPage";
import TheChainPage from "./Pages/TheChainPage";
import UtilityPage from "./Pages/UtilityPage";
import RoadmapPage from "./Pages/RoadmapPage";

const Routes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/how-to-buy",
      element: <HowtoBuy />,
    },
    {
      path: "/tokenomics",
      element: <TokenomicsPage />,
    },
    {
      path: "/faqs",
      element: <FaqsPage />,
    },
    {
      path: "/utility",
      element: <UtilityPage />,
    },
    {
      path: "/thechain",
      element: <TheChainPage />,
    },
    {
      path: "/roadmap",
      element: <RoadmapPage />,
    },
    {
      path:"/header",
      element: <Header />
    }
  ]);
  return element;
};

export default Routes;
