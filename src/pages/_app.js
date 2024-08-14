import App from 'next/app';
import "@/styles/global.scss";
import RootLayout from "@/pages/layout";


function MyApp({Component, pageProps}) {
  return <RootLayout>
    <Component {...pageProps} />
  </RootLayout>
}

MyApp.getInitialProps = async ctx => {
  return await App.getInitialProps(ctx);
};

export default MyApp;