/* eslint-disable @next/next/no-title-in-document-head */
import { FunctionComponent } from 'react';
import Head from 'next/head';
import { PageWithLayout } from '../types/PageWithLayout';


type AppProps = {
  Component: PageWithLayout
  pageProps: any
}

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page: any) => page);
  return (
    <>
      <Head>
        <title>Example</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
