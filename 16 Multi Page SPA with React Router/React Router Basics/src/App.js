import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "products", element: <ProductsPage /> },
        { path: "products/:productId", element: <ProductDetails /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
