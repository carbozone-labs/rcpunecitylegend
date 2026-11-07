"use client";

import Image, { type ImageProps } from "next/image";
import imageLoader from "@/lib/image-loader";

/** next/image with the static-export loader always attached (works the same in dev, Turbopack and production). */
export default function SiteImage(props: Omit<ImageProps, "loader">) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} loader={imageLoader} />;
}