import React, { useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { Collaps } from "../components/Collaps";
import { dataList } from "../types";
import { FaBars } from 'react-icons/fa'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [sidebar, setSidebar] = useState(false)
  const toggleSidebar = () => {
    setSidebar((prev) => !prev)
  }

  return (
    <>
      <Head>
        <title>LinksHub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="lg:flex flex-wrap justify-between">
          <div className={`lg:w-1/5 bg-base-300 p-4 lg:min-h-screen`}>
            <div className="flex justify-between">
            <h1 className="text-3xl font-bold mb-4"><span className="border-b-4 border-violet-500 text-violet-200">Links</span><span className="text-violet-500">Hub</span></h1>

            <FaBars className="text-2xl cursor-pointer lg:hidden" onClick={toggleSidebar} />
            </div>
           <div className={`lg:block ${sidebar ? "block" : "hidden"} transition-all ease-in duration-300`}>
           <div className="flex flex-col gap-1 my-2">
              <h2 className="uppercase font-bold text-xl">frontend</h2>
              <Collaps title={'Images & Illustrations'} elements={data} />
              <Collaps title={'Fonts'} elements={data} />
              <Collaps title={'Animations'} elements={data} />
              <Collaps title={'Colors'} elements={data} />
            </div>

            <div className="flex flex-col gap-1 my-2">
              <h2 className="uppercase font-bold text-xl">backend</h2>
              <Collaps title={'Validators'} elements={data} />
              <Collaps title={'Security'} elements={data} />
            </div>
           </div>
          </div>

          <div className="lg:w-4/5 text-center mt-12">
              <h2 className="lg:text-8xl text-6xl font-bold text-violet-200"><span className="border-b-8 border-violet-500">Links</span><span className="text-violet-500">Hub</span></h2>
              <p className="uppercase font-semibold text-3xl mt-12">...coming soon</p>
          </div>
        </div>
      </main>
    </>
  );
}

const data:dataList[] = [
  {
    name: 'Lorem Ipsum-1', 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero odit excepturi.',
    url: 'https://resource.link'
  },
  {
    name: 'Lorem Ipsum-2', 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero odit excepturi.',
    url: 'https://resource.link'
  },
  {
    name: 'Lorem Ipsum-3', 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero odit excepturi.',
    url: 'https://resource.link'
  }
]