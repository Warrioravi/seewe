import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { auth } from "../firebase";
import { useHistory } from "react-router";
import templateCreator from "../redux/actions/templateActios";

import "./home.css"




let Home = () => {
  let user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let history=useHistory();
  return (
    <>
      {user ? "" : <Redirect to="/login" />}

      <div className="template_wrapper">
        <div className="template_A" onClick={()=>{
             dispatch(templateCreator("A"));
             history.push("/personal");
        }}>
          <img src="http://localhost:3000/skin1.svg" />
     


        </div>
        <div className="template_B" onClick={()=>{
             dispatch(templateCreator("B"));
             history.push("/personal");
             
        }}>
           <img src="http://localhost:3000/skin2.svg" />

        </div>


      </div>


      <button className="logout-btn"
        onClick={() => {
          auth.signOut();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Home;