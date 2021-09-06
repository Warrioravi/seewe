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
   <>
    <Router>
        <Navbar />
        <Switch>
        <Route path="/qualifications">
            <Qualifications />
          </Route>
          <Route path="/personal">
            <PersonalData />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
   </>
  );
}

export default App;
