import { Provider } from "react-redux";
import "../styles/globals.css";
import "antd/dist/antd.min.css";
import { store } from "../app/store";
import Router from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   Router.events.on("routeChangeStart", () => setLoading(true));
  //   Router.events.on("routeChangeComplete", () => setLoading(false));
  //   Router.events.on("routeChangeError", () => setLoading(false));

  //   if (Router.pathname === "/[slug]/signin") {
  //     Router.events.on("routeChangeStart", () => setLoading(false));
  //     Router.events.on("routeChangeComplete", () => setLoading(false));
  //     Router.events.on("routeChangeError", () => setLoading(false));
  //   }

  //   return () => {
  //     Router.events.off("routeChangeStart", () => setLoading(true));
  //     Router.events.off("routeChangeComplete", () => setLoading(false));
  //     Router.events.off("routeChangeError", () => setLoading(false));
  //   };
  // }, [Router.events]);
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
