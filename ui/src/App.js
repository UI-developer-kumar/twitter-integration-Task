import { Outlet } from "react-router-dom";
import Login from "./features/user/Login";
import { useSelector } from "react-redux";

function App() {

  const user = useSelector(state => state.auth)
  // console.log(user);
  

  return (
    <div className="app">
      {
        user ? (
          <>
          <Outlet></Outlet>
          </>
        ) : (
          <Login></Login>
        )
      }
    </div>
  );
}

export default App;
