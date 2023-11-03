import React, { useState ,useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup.";
import ContactUs from "./pages/ContactUs";
import TourPackages from "./pages/TourPackages";
import BookNow from "./pages/BookNow";
import BookingForm from "./pages/BookingForm";
import Header from "./components/Header";
import Admin from "./pages/Admin";
import { removeFromLocalStorage } from "./Services/localStorageUtil";
import TotalBookings from "./pages/TotalBookings";
import MyBookings from "./pages/MyBookings";
import Bill from "./pages/Bill";
import BucketList from "./pages/Bucketlist";
import { getFromLocalStorage ,setToLocalStorage} from "./Services/localStorageUtil";
import BookingDetail from "./pages/BookingDetails";
import Reviews from "./pages/Review";
import ReviewsPage from "./pages/ReviewPage";
import DarkMode from "./pages/DarkMode";
import TravelGuidelines from "./pages/TravelGuideLines";
import FAQ from "./pages/FAQ";
import PostForm from "./pages/PostForm";



function App() {


  const initialAuthStatus = getFromLocalStorage("isAuthenticated") || false;
  const initialIsUser = getFromLocalStorage("isUser") || false;
  const initialIsAdmin = getFromLocalStorage("isAdmin") || false;


  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profilepop, setProfilepop] = useState(true);

  useEffect(() => {
    // Check if the user is already authenticated in local storage
    const initialAuthStatus = getFromLocalStorage("isAuthenticated");
    const initialIsUser = getFromLocalStorage("isUser");
    const initialIsAdmin = getFromLocalStorage("isAdmin");

    if (initialAuthStatus) {
      // If the user is authenticated, update the state
      setIsAuthenticated(true);
      setIsUser(initialIsUser);
      setIsAdmin(initialIsAdmin);
    } else {
      // If the user is not authenticated, set initial values in local storage
      setToLocalStorage("isAuthenticated", false);
      setToLocalStorage("isUser", false);
      setToLocalStorage("isAdmin", false);
    }
  }, []);

  const handleLogout = () => {
    // Implement logout logic here, like clearing user data, etc.
    setIsAuthenticated(false);
    setIsUser(false);
    setIsAdmin(false);
    removeFromLocalStorage("userEmail");
    setProfilepop((prevState) => !prevState);

    setToLocalStorage("isAuthenticated", false);
      setToLocalStorage("isUser", false);
      setToLocalStorage("isAdmin", false);
      window.location.reload();
    
  };

  return (
    <>
      {/* Pass isAuthenticated and handleLogout as props to Header */}
      <Header
        isAuthenticated={isAuthenticated}
        isUser={isUser}
        isAdmin={isAdmin}
        handleLogout={handleLogout}
      />
      <Routes>
        {/* Pass isAuthenticated and setIsAuthenticated as props to Signin */}
        <Route
          path="/Signup"
          element={
            <Signup
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              isAdmin={isAdmin}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Signin
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              setIsUser={setIsUser}
              setIsAdmin={setIsAdmin}
            />
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/TourPackages" element={<TourPackages />} />
        <Route
          path="/booknow/:itemId"
          element={
            <BookNow
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route path="/BookingForm" element={<BookingForm />} />
        <Route path="/Adminpage" element={<Admin />} />
        <Route exact path="/TotalBookings/:id" element ={<TotalBookings></TotalBookings>}/>
        <Route path="/MyBookings" element={<MyBookings />} />
        <Route path="/Bill" element={<Bill />} />
        <Route path="/Bucketlist" element={<BucketList />} />
        <Route path="/booking/:bookingId" element={<BookingDetail />} />
        <Route path="/Review/:destination" element={<Reviews />} />
        <Route path="/Reviewpage" element={<ReviewsPage />} />
        <Route path="/TravelGuidelines" element={<TravelGuidelines />}/>
        <Route path="/FAQ" element={<FAQ/>}/>
        <Route path="/PostForm" element={<PostForm/>}>


        </Route>
      </Routes>

      
    </>
  );
}

export default App;
