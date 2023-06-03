import { error } from '@sveltejs/kit';
import createClient from '$lib/prismicio';

export async function load({ fetch, params, request }) {
  const client = createClient({ fetch, request });
  const document = await client.getByUID('page', 'home');
const scripts= await client.getSingle('settings')
  if (document) {
    return { document,scripts};
  }

  error(404, 'Not found');
}
