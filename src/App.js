import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignInPage from "./pages/SignIn";
import User from "./pages/User";
import { Provider } from "react-redux";
import store from "./redux/utils/store";

const App = () => {

  return (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
