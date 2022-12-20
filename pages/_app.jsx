import { Provider } from "react-redux";
import "../styles/globals.css";
import "antd/dist/antd.min.css";
import { store } from "../app/store";
import { useEffect, useState } from "react";
import { supaClient } from "../lib/supabase";

function MyApp({ Component, pageProps }) {


  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
