import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CardsInfo from "./pages/cards-info/CardsInfo";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="info/:id" element={<CardsInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
