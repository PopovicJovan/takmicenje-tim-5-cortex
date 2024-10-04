import PrivateRoute from "./Pages/PrivateRoute";
import SignInPage from "./Pages/SignIn/SignIn";
import RegisterPage from "./Pages/Register/Register";
import MainPage from "./Pages/StartPage/MainPage";
import VehicleList from "./Pages/CarsList/VehicleList";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import User from "./Pages/User/User";
import Header from "./Components/Header";
import Footer from "./Pages/Footer/Footer";

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isMainPage = location.pathname === "/main";
  const isAuthPage = location.pathname === "/signin" || location.pathname === "/register";

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header component displayed on all pages except for login and register */}
      {!isAuthPage && <Header />}

      <div className={`flex-grow ${isAuthPage || isMainPage ? "flex items-center justify-center" : ""}`}>
        <div className={`w-full ${isAuthPage ? "lg:w-full" : "lg:w-4/4"} flex items-center justify-center`}>
          {children}
        </div>
      </div>

      {/* Footer component displayed on all pages except for login and register */}
      {!isAuthPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Make the root path '/' display MainPage instead of redirecting to /signin */}
        <Route
          path="/"
          element={
            <LayoutWrapper>
              <MainPage />
            </LayoutWrapper>
          }
        />
        <Route
          path="/register"
          element={
            <LayoutWrapper>
              <RegisterPage />
            </LayoutWrapper>
          }
        />
        <Route
          path="/signin"
          element={
            <LayoutWrapper>
              <SignInPage />
            </LayoutWrapper>
          }
        />
        <Route
          path="/main"
          element={
            <LayoutWrapper>
              <MainPage />
            </LayoutWrapper>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute
              element={
                <LayoutWrapper>
                  <Dashboard />
                </LayoutWrapper>
              }
            />
          }
        />
        <Route
          path="/user-profile"
          element={
            <LayoutWrapper>
              <User />
            </LayoutWrapper>
          }
        />
        <Route
          path="/vehicle-list"
          element={
            <LayoutWrapper>
              <VehicleList />
            </LayoutWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
