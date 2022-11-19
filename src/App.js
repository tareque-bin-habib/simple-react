import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Main from './layouts/Main';
import Orders from './components/Orders/Orders';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/products',
          loader: () => fetch('fakedata.json'),
          element: <Products></Products>
        },
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },

  ])

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
