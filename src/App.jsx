import { RouterProvider, createHashRouter } from "react-router-dom"
import Layout from "./Component/Layout/Layout"
import Home from "./Component/Home/Home"
import Navbar from "./Component/Navbar/Navbar"
import Footer from "./Component/Footer/Footer"
import Shop from "./Component/Shop/Shop"
import Dateiles from "./Component/Dateiles/Dateiles"
import Contact from "./Component/Contact/Contact"
import Categories from "./Component/Categories/Categories"
import Cart from "./Component/Cart/Cart"
import Search from "./Component/Search/Search"
import { Provider } from "react-redux"
import { store } from "./Rduex/Store"
import NotFound from "./Component/NotFound/NotFound"
import SpecificCategory from "./Component/SpecificCategory/SpecificCategory"
export default function App() {
  let routes = createHashRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'navbar', element: <Navbar /> },
        { path: 'shop', element: <Shop /> },
        { path: 'dateiles/:id', element: <Dateiles /> },
        { path: 'contact', element: <Contact /> },
        { path: 'categories', element: <Categories /> },
        { path: 'cart', element: <Cart /> },
        { path: 'footer', element: <Footer /> },
        { path: 'specificcategory/:cat', element: <SpecificCategory /> },
        { path: 'search/:searchTerm', element: <Search /> },
        { path: '*', element: <NotFound /> },
      ]
    }
  ])
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  )
}