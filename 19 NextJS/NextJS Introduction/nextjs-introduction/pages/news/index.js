//domain.com/news
import { Fragment } from "react";
import Link from "next/link";

const News = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/news-1">News 1</Link>
        </li>
        <li>
          <Link href="/news/news-2">News 2</Link>
        </li>
        <li>
          <Link href="/news/news-3">News 3</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default News;
