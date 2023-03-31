import ReactDOM from "react-dom";
import { LoadingCircle } from "./tools/LoadingCircle";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./stylesheets/index.css";

const Register = React.lazy(() => import("./containers/Register/Register"));
const Login = React.lazy(() => import("./containers/Login/Login"));
const Home = React.lazy(() => import("./containers/Home/Home"));
const Cart = React.lazy(() => import("./containers/Cart/Cart"));
const Checkout = React.lazy(() => import("./containers/Checkout/Checkout"));

const App = () => {
  const user = localStorage.getItem("token");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(delay);
  }, [isLoading]);

  const handleRouteStart = () => {
    setIsLoading(true);
  };

  const handleRouteEnd = () => {
    setIsLoading(false);
  };

  return (
    <BrowserRouter>
      <Routes onStart={handleRouteStart} onEnd={handleRouteEnd}>
        <Route
          path="Register"
          element={
            <Suspense fallback={<LoadingCircle />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="Login"
          element={
            <Suspense fallback={<LoadingCircle />}>
              <Login />
            </Suspense>
          }
        />
        {user && (
          <Route
            path="Home"
            element={
              <Suspense fallback={<LoadingCircle />}>
                <Home />
              </Suspense>
            }
          />
        )}
        {user && (
          <Route
            path="Cart"
            element={
              <Suspense fallback={<LoadingCircle />}>
                <Cart />
              </Suspense>
            }
          />
        )}
        {user && (
          <Route
            path="Checkout"
            element={
              <Suspense fallback={<LoadingCircle />}>
                <Checkout />
              </Suspense>
            }
          />
        )}
        <Route path="/" element={<Navigate replace to="Login" />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Nothing to see here ....</p>
            </main>
          }
        />
      </Routes>
      {isLoading && <LoadingCircle />}
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
