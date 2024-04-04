import { Fragment } from "react";
import MainNavigation from "../componenets/MainNavigation";

const ErrorPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <h1>An Error Occurred!</h1>
        <p>Could Not Find This Page</p>
      </main>
    </Fragment>
  );
};

export default ErrorPage;
