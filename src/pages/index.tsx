import Head from 'next/head';
import dynamic from 'next/dynamic';

const ReactAdmin = dynamic(() => import('../admin/ReactAdmin'), { ssr: false });

export default function Home() {
  return (
    <>
      <ReactAdmin />
    </>
  );
}
