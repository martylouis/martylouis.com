/**
 * Metadata interface to describe all the metadata fields that can be set in a document.
 * @interface
 */
interface Metadata {
  title?: null | string;
  description?: null | string;
  image?: {
    src?: null | string | URL;
    alt?: null | string;
  } | null;
  url?: null | URL;
  canonicalURL?: string;
}
