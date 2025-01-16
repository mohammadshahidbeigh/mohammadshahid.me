// Import ImageResponse from "next/og" instead of "next/server"
import {ImageResponse} from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 10,
  height: 10,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  // Throw an error indicating the deprecation of ImageResponse
  throw new Error(
    'ImageResponse has been deprecated since Next.js 14. Please import from "next/og" instead.'
  );
}
