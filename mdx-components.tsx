import { MDXComponents } from "mdx/types"
import Image, { type ImageProps } from "next/image"

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    Image: ({ alt, ...props }: ImageProps) => <Image alt={alt} {...props} />,
  }
}
