import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "@/components/routes";
import Navbar from "@/pages/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map((r) => {
          return <Route key={r.path} path={r.path} element={r.element} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
