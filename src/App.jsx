import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Books from "./pages/Books";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import AddBook from "./pages/AddBooks";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import EditBooks from "./components/EditBooks";
import BookInfo from "./pages/BookInfo";
import Forget from "./pages/ForgetPass";
import Reset from "./pages/Reset";
// import EditBooks from "./pages/EditBooks";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Books/:id" element={<BookInfo />} />
        <Route path="/Login" element={<Login />} />        
        <Route path="/AddBook" element={<AddBook />} />
        <Route path="/profile/:name" element={<Profile />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/admin/Books/Edit/:book_id" element={<EditBooks />} />
          <Route path="/forget-password" element={<Forget />} />
        <Route path="/reset_password/:id/:token" element={<Reset/>}/>
       

      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
      <Footer />
    </>
  );
}

export default App;
