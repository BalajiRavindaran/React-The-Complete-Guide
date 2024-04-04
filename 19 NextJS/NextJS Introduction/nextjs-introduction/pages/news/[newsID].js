//domain.com/news/newsID

import { Fragment } from "react";
import { useRouter } from "next/router";

const newsDetails = () => {
  const router = useRouter();
  console.log(router.query.newsID);
  return <h1>The News Details Page</h1>;
};

export default newsDetails;
