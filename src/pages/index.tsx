import React from 'react';
import Link from 'next/link';
import RootLayout from '../layouts/RootLayout';
import { SectionNames } from '../enums/SectionVisibility.enum'

const Home = () => {
  return (
    <RootLayout>
      <Link href={`/?section=Home`} scroll={false}>
        <h1 className="text-blue-500 text-xl font-bold m-4 cursor-pointer">Go to Home</h1>
      </Link>
      <Link href="/?section=About" scroll={false}>
        <h1 className="text-blue-500 text-xl font-bold m-4 cursor-pointer">Go to About</h1>
      </Link>
      <Link href="/?section=Tools" scroll={false}>
        <h1 className="text-blue-500 text-xl font-bold m-4 cursor-pointer">Go to Tools</h1>
      </Link>
      <Link href="/?section=Work" scroll={false}>
        <h1 className="text-blue-500 text-xl font-bold m-4 cursor-pointer">Go to Work</h1>
      </Link>
      <Link href="/?section=Contact" scroll={false}>
        <h1 className="text-blue-500 text-xl font-bold m-4 cursor-pointer">Go to Contact</h1>
      </Link>
    </RootLayout>
  );
};

export default Home;
