/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import { Inter } from "@next/font/google";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Headers from "../component/Hearders";
// import Header2 from '@/component/Header2'
import Main from "@/component/Main";
import Learner from "@/component/Learner";
import "aos/dist/aos.css";
import getLearners from "../boites/frontend/util";
import AppContext from "@/Context/AppContext";
import { useState } from "react";
import AOS from "aos";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ learnersData, oneLearner, setOneLearner }) {
  const [allLearners, setAllLearners] = useState(learnersData);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="/js/aos.js"></script>{" "}
        <script src="/js/bootsnav.js"></script>{" "}
        <script src="/js/bootstrap.min.js"></script>{" "}
        <script src="/js/master.js"></script>{" "}
        <script type="text/javascript"> AOS.init(); </script> `
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>AOS.init()</script>
      </Head>
      <div>
        <AppContext.Provider
          value={{ allLearners, setAllLearners, oneLearner }}
        >
          {/* <Header /> */}
          <Headers />
          <Main />
          <Learner setOneLearner={setOneLearner} />
          <Footer />
        </AppContext.Provider>
      </div>
    </>
  );
}

export async function getStaticProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const learnersData = await getLearners();

  return {
    props: { learnersData },
  };
}
