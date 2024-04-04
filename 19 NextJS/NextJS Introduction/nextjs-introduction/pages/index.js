//domain.com/
import Link from "next/link";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <h1>The Home Page</h1>
      <p>
        <Link href="/news">News</Link>
      </p>
    </Fragment>
  );
};

export default Home;
