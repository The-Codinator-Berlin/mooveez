import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { app } from "./config/firebaseConfig";
import Mooveez from "./views/Mooveez";
import Favourites from "./views/Favourites";
import Login from "./views/Login";
import Register from "./views/Register";
import About from "./views/About";
import Page404 from "./views/Page404";
import Navigation from "./components/Navigation";

import { MooveezContextProvider } from "./context/MooveezContext";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <div className="App bg-neutral-900 text-center sm:text-center">
      <AuthContextProvider>
        <Navigation />
        <MooveezContextProvider>
          <Routes>
            <Route path="/" element={<Mooveez />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/favourites"
              element={
                <ProtectedRoute>
                  <Favourites />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </MooveezContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
