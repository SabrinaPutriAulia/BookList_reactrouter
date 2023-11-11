import { VStack } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookDetails from "./pages/BooksDetail";
import EditBookPage from "./pages/Editbook";
import Homepage from "./pages/Homepage";
import NewBookPage from "./pages/NewBooks";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoutes";

function App() {
  return (
    <VStack minH="100vh" minW="100vw">
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route
            path={"/newbook"}
            element={
              <PrivateRoute>
                <NewBookPage />
              </PrivateRoute>
            }
          />
          <Route
            path={"/books/:id"}
            element={
              <PrivateRoute>
                <BookDetails />
              </PrivateRoute>
            }
          />
          <Route
            path={"/editbook/:id"}
            element={
              <PrivateRoute>
                <EditBookPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </VStack>
  );
}

export default App;
