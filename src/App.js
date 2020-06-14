import React from "react";
import { Content } from "./component/content/Content";
import { Footer } from "./component/footer/Footer";
import { Header } from "./component/navigation/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
