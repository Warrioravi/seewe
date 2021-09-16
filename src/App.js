import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom' 
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signup';
import Navbar from './components/navbar';
import  PersonalData  from './components/personalData';
import Qualifications from './components/qualifications';
import { auth, firestore } from './firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userCreator } from './redux/actions/userActions';
import PublicPreview from './components/publicPreview';
import LandingPage from "./components/landingPage";
import Resume from"./components/resume"



function App() {
let  dispatch = useDispatch()
useEffect(()=>{
  
  let unsub=auth.onAuthStateChanged(async (user)=>{
    dispatch(userCreator(user));
    if(user){
      let {uid,email}=user;
      let docRef=firestore.collection("users").doc(uid);
      if(!docRef.exists){
        docRef.set({
          email,
        })
      }
    }
  })

  return ()=>{
    unsub();
  }
},[])

  return (
   <Resume/>

   
    /* <Router>
        
        <Switch>
        <Route path="/main">
          <LandingPage/>
          </Route>
        <Route path="/publicpreview/:rid">
            <Navbar />
            <PublicPreview />
          </Route>
        <Route path="/qualifications">
            <Navbar />
            <Qualifications />
          </Route>
          <Route path="/personal">
            <Navbar />
            <PersonalData />
          </Route>
          <Route path="/login">
            <Navbar />
            <Login />
          </Route>
          <Route path="/signup">
            <Navbar />
            <SignUp />
          </Route>
          
          <Route path="/">
          <Navbar />
            <Home/>
          </Route>
        </Switch>
      </Router> */
   
  );
}

export default App;
