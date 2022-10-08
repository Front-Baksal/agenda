import { useState } from 'react';
import Link from 'next/link';

export default function Review({ data }) {
    const [name, setName] = useState(data.name);

  return (
    <>
      <h1>Review</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <div>{name}</div>
      
    </>
  );
}

export async function getServerSideProps(context) {
    const data = {
        id : 0,
        name: "euije",
        title: "next.js",
        content: null
    }
    return {
      props: { data }, // will be passed to the page component as props
    }
  }