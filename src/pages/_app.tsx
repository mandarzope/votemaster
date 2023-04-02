import React from "react";
import ReactDOM from "react-dom";
import Head from "next/head";
import Router from "next/router";

import PageChange from "@/components/PageChange/PageChange";

// import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/styles/index.scss";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition") as any);
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition") as any);
  document.body.classList.remove("body-page-transition");
});

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Votemaster - A closer relationship between individuals and politics</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}
