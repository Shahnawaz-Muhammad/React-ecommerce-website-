import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import ProductDetails from './pages/productDetails/ProductDetails';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Cart from './pages/cart/Cart';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from './components/navbar/Navbar'
// import Home from './pages/home/Home';
// import ProductCategory from './pages/productCategory/ProductCategory';
// import Cart from './pages/cart/Cart';
// import Login from './pages/login/Login';
// import Register from './pages/register/Register';
// import Error from './pages/error/Error';
// import Footer from './components/footer/Footer';
// import CategoryItem from './components/categories/CategoryItem';

const theme = createTheme({
  palette: {
    primary: {
      main: '#37474f',
    },
    secondary:{
      main:'#cfd8dc'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    {/* <BrowserRouter>
      <Navbar />
      <ProductCategory />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductCategory />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>, */}
  {/* <Register /> */}
  {/* <Login /> */}
  <Cart /> ,
    </ThemeProvider>
  );
}

export default App;
