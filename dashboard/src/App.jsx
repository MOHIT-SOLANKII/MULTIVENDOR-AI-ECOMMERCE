import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import { useState } from "react";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  return (
    <BrowserRouter>
      <Router allRoutes={allRoutes} />
    </BrowserRouter>
  );
}

export default App;
