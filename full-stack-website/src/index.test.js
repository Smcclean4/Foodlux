import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Home from "./containers/Home";
import Cart from "./containers/Cart";
import Checkout from "./containers/Checkout";

describe("Making sure that routes in index.js work correctly", () => {
  test('renders correct content for "/Login route', () => {
    render(
      <MemoryRouter initialEntries={["/Login"]}>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByTestId("Login")).toBeInTheDocument();
  });

  test('renders correct content for "/Register route', () => {
    render(
      <MemoryRouter initialEntries={["/Register"]}>
        <Routes>
          <Route path="/Register" element={<Register />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByTestId("Register")).toBeInTheDocument();
  });

  test('renders correct content for "/Home route', () => {
    render(
      <MemoryRouter initialEntries={["/Home"]}>
        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByTestId("Home")).toBeInTheDocument();
  });

  test('renders correct content for "/Cart route', () => {
    render(
      <MemoryRouter initialEntries={["/Cart"]}>
        <Routes>
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByTestId("Cart")).toBeInTheDocument();
  });

  test('renders correct content for "/Checkout route', () => {
    render(
      <MemoryRouter initialEntries={["/Checkout"]}>
        <Routes>
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByTestId("Checkout")).toBeInTheDocument();
  });
});
