/* eslint-disable import/no-anonymous-default-export */
import { linkResolver, createPrismicClient } from '../../prismic-config';
import { setPreviewData, redirectToPreviewURL } from '@prismicio/next';

export default async (req, res) => {
  const client = createPrismicClient({ req });

  await setPreviewData({ req, res });

  await redirectToPreviewURL({ req, res, client, linkResolver });
};
