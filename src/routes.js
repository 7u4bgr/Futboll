import About from "./pages/about";
import HistoryMatches from "./pages/historymatches";
import HistoryOverview from "./pages/historyoverview";

import Home from "./pages/home";
import LiveTrack from "./pages/livetrack";
import NotFound from "./pages/notFound";
import UserProfile from "./pages/userprofile";

const routeItem = (id, title, path, component) => {
  return {
    id,
    title,
    path,
    component,
  };
};

const routes = {
  home: routeItem(1, 'home', "/", Home),
  about: routeItem(2, 'about', "/about", About),
  notFound: routeItem(3, 'notFound', "*", NotFound),
  livetrack:routeItem(4,"livetrack",'/livetrack',LiveTrack),
  historymatches:routeItem(5,"historymatches","/history",HistoryMatches),
  historyoverview:routeItem(6,"historyoverview","/historyoverview",HistoryOverview),
  userprofile:routeItem(7,'userprofile',"/user",UserProfile)

};

const routeArr = Object.values(routes);

export { routes, routeArr };
