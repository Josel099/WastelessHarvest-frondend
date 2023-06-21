import React ,{useState}from 'react'
import { Route,Routes } from 'react-router-dom';
import SignIn from './Components/signin/SignIn';
import SignUp from './Components/signup/SignUp';
import Home from "./Components/home/Home"
// import HomeList from './Components/homefoodList/HomeList'
import Donation from './Components/donationForm/Donation';
import Navbar from './Components/navbar/Navbar';
import Mylist from './Components/Mylist/Mylist';
function ComponentsImport() {


    const [isSignedIn, setIsSignedIn] = useState(false);
    const [isMyList , setIsMyList] = useState(false); // useState for checking the page is mylist or HomeListt ?

    const handleSignIn = () => {
      setIsSignedIn(true);
    };



  return (
    <div>
        
        <Navbar isSignedIn={isSignedIn} setIsMyList={setIsMyList} />
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signin" element={<SignIn  onSignIn={handleSignIn} />}/>
    <Route path="/signup" element={<SignUp/>}/>
    {/* <Route path='/homeList' element={<HomeList/>}/> */}
    <Route path='/donation' element={<Donation/>}/>
    <Route path='/mylist' element={<Mylist isMyList={isMyList}/>}/>
  </Routes>
  


    </div>
  )
}

export default ComponentsImport