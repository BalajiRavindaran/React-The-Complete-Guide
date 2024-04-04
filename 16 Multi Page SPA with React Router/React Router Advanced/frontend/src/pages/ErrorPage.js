import { Fragment } from "react";
import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An Error Occurred";
  let message = "Something Went Wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not Found";
    message = "Could Not Find Resource or Page";
  }

  return (
    <Fragment>
        <MainNavigation />
      <PageContent title={title}>{message}</PageContent>
    </Fragment>
  );
};

export default ErrorPage;
