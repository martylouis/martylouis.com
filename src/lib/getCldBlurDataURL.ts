import { getCldImageUrl } from "next-cloudinary"

export async function getCldBlurDataURL(
  src: string,
  options: { width?: number } = { width: 100 },
) {
  const cldFolder = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_FOLDER
  const cldSrc = cldFolder ? `${cldFolder}/${src}` : src

  const imageUrl = getCldImageUrl({
    src: cldSrc,
    ...options,
  })

  const response = await fetch(imageUrl)
  const arrayBuffer = await response.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  const base64 = buffer.toString("base64")

  return `data:${response.type};base64,${base64}`
}
