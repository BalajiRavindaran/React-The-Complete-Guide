import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  // const navigation = useNavigation();
  return (
    <Fragment>
      <MainNavigation />
      <main>
        {/* {navigation.state==="loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
