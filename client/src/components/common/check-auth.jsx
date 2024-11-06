
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();   // gives the current location

  console.log(location.pathname, isAuthenticated);


  if (location.pathname === "/") { // for by default  "/" 
    if (!isAuthenticated) {              // if not authenicated then
      return <Navigate to="/auth/login" />;
    } else {
      if (user?.role === "admin") {   // otherwise
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/shop/home" />;
      }
    }
  }



  if (
    !isAuthenticated &&   // if the user is not authenticated and then try to access the any shopping/home/checkout page then it should redirects to login page first
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />; // redirects here
  }




  if (
    isAuthenticated &&   // if the user is already authenticated and then try to access the page it depends admin/user
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") {      // for admin
      return <Navigate to="/admin/dashboard" />;
    } else {    // for user
      return <Navigate to="/shop/home" />;
    }
  }





  if (
    isAuthenticated &&   // if authenicated 
    user?.role !== "admin" &&   // and not admin and try to access the admin page
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }





  if (
    isAuthenticated &&
    user?.role === "admin" &&   // if the admin try to access the user page 
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }






  return <>{children}</>;
}

export default CheckAuth;
