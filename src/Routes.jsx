import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <div>
            <header>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/products">Products</Link>
            </header>
            <Outlet />
          </div>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Routes;
