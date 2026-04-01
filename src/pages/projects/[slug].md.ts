import { getRawMarkdownPaths, rawMarkdownResponse } from '@/lib/raw-markdown';
import type { APIRoute, GetStaticPaths } from 'astro';

export const getStaticPaths: GetStaticPaths = async () => {
  return getRawMarkdownPaths('projects');
};

export const GET: APIRoute = ({ props }) => {
  return rawMarkdownResponse(props.entry);
};
