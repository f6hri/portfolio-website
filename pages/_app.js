import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { DefaultSeo } from "next-seo";
import SEO from "../config/seo";
import ROUTES from "../config/routes";
import Header from "../components/Header";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [darkMode, toggle] = useState(false);
  useEffect(() => {
    !localStorage.getItem("darkMode") && localStorage.setItem("darkMode",false)
    localStorage.getItem("darkMode") === "true"
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
    toggle(JSON.parse(localStorage.getItem("darkMode")))
    document.querySelector("body").classList.add("bg-slate-100");
    document.querySelector("body").classList.add("dark:bg-gray-800");
    document.querySelector("body").classList.add("transition-all");
    document.querySelector("body").classList.add("ease"); 
  },[darkMode]);
  const toggleDarkMode = (mode) =>{
    localStorage.setItem("darkMode",mode)
    toggle(mode)
  }
  return (
    <>
      <NextNProgress color={darkMode === false?"#1f2937":"#f1f5f9"} />
      <DefaultSeo {...SEO} />
      <Header brand="{ fahridev }" routes={ROUTES} darkMode={darkMode} toggle={toggleDarkMode} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
