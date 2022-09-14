import { Route, Routes } from "react-router-dom";
import Home from "components/pages/Home/Home";
import s from "./App.module.scss"

export const App = () => {
  return (
    <>
      <Routes>
          <Route index element={<Home />} />
      </Routes>
    </>
  );
};
