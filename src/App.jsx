import React,{ useState, useContext,useEffect,createContext} from 'react';
import './App.css';
import Home from './Component/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Auth from './Component/Authentication/Auth';
import {Navigate} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Component/Firbase/firbase';
import { AuthContext } from './Component/Context/AuthContext';

// export const AuthContext = createContext();


function App() {
  const {currentUser} = useContext(AuthContext)
  // const [currentUser, setCurrentUser] = useState({});

  // useEffect(() => {
  //   const unsub = onAuthStateChanged(auth, (users) => {
  //     setCurrentUser(users);
  //     console.log("users",users);
  //   });

  //   return () => {
  //     unsub();
  //   };
  // }, []);
  // console.log('currentUser:', currentUser);
  // useEffect(()=>{
  //   console.log("new user",currentUser);
  // },[currentUser])
 const ProtectedRoutes =({children})=>{
  if(!currentUser){
    return <Navigate to='/authentication' />
  }
  return children
 }
  return (
    // <AuthContext.Provider value={{currentUser,setCurrentUser}}>
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' >
            <Route 
            index
              element={
                <ProtectedRoutes>
                  <Home />
                </ProtectedRoutes>
               } />
            <Route path='/authentication' element={<Auth />} />
          </Route>
        </Routes>
      </Router>
    </div>
    // </AuthContext.Provider>
  );
}

export default App;
