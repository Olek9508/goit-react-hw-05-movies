import { Route, Routes } from "react-router-dom";
import { Layout } from "components/Layout/Layout";

export const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout/>}/>
        </Routes>
    </>
  );
};
