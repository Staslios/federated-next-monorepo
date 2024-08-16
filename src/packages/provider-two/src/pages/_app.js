import App from 'next/app';
import "@/styles/globals.scss";


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async ctx => {
  return await App.getInitialProps(ctx);
};

export default MyApp;