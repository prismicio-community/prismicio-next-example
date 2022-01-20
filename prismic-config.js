import { createClient, getEndpoint } from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';

export const apiEndpoint = getEndpoint('prismicio-next-example');

export const linkResolver = (doc) => {
  if (doc.type === 'product') {
    return `/products/${doc.uid}`;
  }
  return '/';
};

export const createPrismicClient = (config) => {
  const client = createClient(apiEndpoint);

  enableAutoPreviews({
    client,
    context: config.context,
    req: config.req,
  });

  return client;
};
