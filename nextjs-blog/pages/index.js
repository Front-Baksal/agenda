import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

import { useRecoilState, useRecoilValue } from "recoil";
import { DongilAtom } from "../atom/atom";
import { useState } from "react";

const YourComponent = () => {
  return (
    <Image
      src="/images/profile.jpeg"
      height={144}
      width={144}
      alt="Your Name"
    />
  );
};

export default function Home({ allPostsData }) {
  /**
   * const _dongil = useRecoilValue(DongilAtom);
   * const [value, setValue] = useState(_dongil.age);
   */
  const [value2, setValue2] = useRecoilState(DongilAtom);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        {/* Recoil */}
        <div>
          <h1>{value2.age}</h1>
          <input
            type="number"
            onClick={(e) => {
              e.preventDefault();
              setValue2(
                (prev) =>
                  (prev = {
                    age: e.target.value,
                    props: "handsome",
                  })
              );
            }}
          ></input>
        </div>

        {/* About page */}
        <h1>
          Go to <Link href="/about">About</Link>
        </h1>

        {/* Component */}
        <YourComponent></YourComponent>

        {/* First Post */}
        <h1 className="title">
          Read <Link href="/posts/first-post">this page!</Link>
        </h1>
      </section>

      <hr />

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}