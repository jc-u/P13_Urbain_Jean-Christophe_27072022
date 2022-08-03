import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignInPage from "./pages/SignIn";
import User from "./pages/User";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
