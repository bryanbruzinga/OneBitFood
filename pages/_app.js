import Head from "next/head";
import Header from "../components/Header";
import "../styles/globals.scss";
import Container from "react-bootstrap/Container";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OneBitFood V2</title>
        <link ref="icon" href="/favicon.ico.png" />
      </Head>
      <main>
        <Header />
        <Container className="mt-5">
          <Component {...pageProps} />
        </Container>
      </main>
    </>
  );
}

export default MyApp;
