import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Checkout from './Pages/Checkout/Checkout';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './Utilities/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="about" element={<About></About>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="register" element={<Register></Register>} />
        <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
        {/* <Route path="/checkout/:id" element={<RequireAuth><Checkout /></RequireAuth>} /> */}
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;