import { error } from '@sveltejs/kit';

import createClient from '$lib/prismicio';

export async function load({ fetch, params, request }) {
  const client = createClient({ fetch, request });
  const document = await client.getSingle('blog_list');
  const blogs = await client.getAllByType('blog', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });

  return {
    documents: {
      document,
      blogs,
    },
  };

  error(404, 'Not found');
}
