import type { AppProps } from 'next/app';
import 'maplibre-gl/dist/maplibre-gl.css';

type Props = AppProps & {
  mapToken: string;
};

const App = ({ Component, pageProps, mapToken }: Props) => (
  <Component {...pageProps} mapToken={mapToken} />
);

App.getInitialProps = () => {
  return { mapToken: process.env.MAP_TOKEN }
}

export default App
