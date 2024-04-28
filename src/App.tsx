import { Route, Routes } from "react-router-dom";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";
import Home from "./components/pages/Home";
import Layout from "./components/layouts/Layout";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
