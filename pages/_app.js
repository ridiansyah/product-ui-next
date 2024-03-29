import "@/styles/global.scss";
import { persistor, store } from "@/store/store";
import withRedux from "next-redux-wrapper";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
    </PersistGate>
  );
}
const makeStore = () => store;
export default withRedux(makeStore)(MyApp);
