import { error } from '@sveltejs/kit';
import createClient from '$lib/prismicio';
import * as prismic from '@prismicio/client';

export async function load({ fetch, params, request }) {
  const client = createClient({ fetch, request });
  const document = await client.getSingle('blog_list');

  //filter by tags
  //prismic.filter.at('document.tags', ['Night']),

  const blogs = await client.get({
    filters: [prismic.filter.at('document.type', 'blog')],
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
