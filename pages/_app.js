import '../styles/globals.css';
import { PrismicPreview } from '@prismicio/next';

function MyApp({ Component, pageProps }) {
  return (
    <PrismicPreview repositoryName='prismicio-next-example'>
      <Component {...pageProps} />
    </PrismicPreview>
  );
}

export default MyApp;
