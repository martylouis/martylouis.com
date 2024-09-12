import { getCldImageUrl } from "next-cloudinary"

export async function getCldBlurDataURL(
  src: string,
  options: { width?: number } = { width: 100 },
) {
  let cldFolder = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_FOLDER
  let cldSrc = cldFolder ? `${cldFolder}/${src}` : src

  let imageUrl = getCldImageUrl({
    src: cldSrc,
    ...options,
  })

  let response = await fetch(imageUrl)
  let arrayBuffer = await response.arrayBuffer()
  let buffer = Buffer.from(arrayBuffer)
  let base64 = buffer.toString("base64")

  return `data:${response.type};base64,${base64}`
}
