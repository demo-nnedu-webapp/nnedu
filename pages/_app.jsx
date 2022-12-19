import { Provider } from "react-redux";
import "../styles/globals.css";
import "antd/dist/antd.min.css";
import { store } from "../app/store";
import { useEffect, useState } from "react";
import { supaClient } from "../lib/supabase";

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(supaClient.auth.getUser());
    supaClient.auth.onAuthStateChange((_event, user) => {
      setUser(user);
    });
  }, []);

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} user={user} />
      </Provider>
    </>
  );
}

export default MyApp;
