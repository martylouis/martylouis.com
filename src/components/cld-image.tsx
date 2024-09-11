"use client"

import { CldImage as CldImageBase, type CldImageProps } from "next-cloudinary"

export function CldImage(props: CldImageProps) {
  let cldFolder = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_FOLDER

  if (cldFolder) {
    props = {
      ...props,
      src: `${cldFolder}/${props.src}`,
    }
  }

  return <CldImageBase {...props} />
}
