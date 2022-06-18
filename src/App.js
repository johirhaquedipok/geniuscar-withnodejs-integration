import { Route, Routes } from "react-router-dom";
import AddServices from "./AddServices/AddServices";
import CheckOut from "./CheckOut/CheckOut";

import Header from "./Header/Header";
import Home from "./Home/Home";
import Login from "./Login/Login";
import ManageServices from "./ManageServices/ManageServices";
import MyProfile from "./MyProfile/MyProfile";
import RequireAuth from "./RequireAuth/RequireAuth";
import ServiceDetails from "./ServiceDetails/ServiceDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route
          path="/addservices"
          element={
            <RequireAuth>
              <AddServices />
            </RequireAuth>
          }
        />
        <Route
          path="/manageservices"
          element={
            <RequireAuth>
              <ManageServices />
            </RequireAuth>
          }
        />

        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
