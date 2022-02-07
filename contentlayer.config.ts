import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files';
// import highlight from 'rehype-highlight';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
};

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/*.mdx`,
  bodyType: 'mdx',
  fields: {
    date: { type: 'date' },
    // dateCreated: { type: 'date', resolve: (doc) => doc.date },
    title: {
      type: 'string',
      required: true,
      resolve: (doc) => doc._raw.title,
    },
    // slug: {
    //   type: 'string',
    //   resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    // },
  },
  computedFields,
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/*.mdx`,
  bodyType: 'mdx',
  fields: {
    date: { type: 'date', required: true },
    // dateCreated: { type: 'date', resolve: (doc) => doc.date },
    title: { type: 'string', required: true },
    isPublished: { type: 'boolean', required: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Page, Post],
  // markdown: { rehypePlugins: [highlight] },
});
