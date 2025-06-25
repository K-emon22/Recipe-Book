import React, {useContext} from "react";

import {Navigate, useLocation} from "react-router";
import Loding from "../Loding/Loding";
import {AuthContext} from "../ContexFile/Context";

const PrivateRoute = ({children}) => {
  const {user, loding} = useContext(AuthContext);
  const location = useLocation();

  if (loding) {
    return <Loding></Loding>;
  } else if (!user) {
    return <Navigate to="/login" state={{from: location}} replace />;
  }
  return children;
};

export default PrivateRoute;
