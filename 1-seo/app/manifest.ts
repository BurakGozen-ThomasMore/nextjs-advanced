import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Example App",
    short_name: "Example",
    description: "Developed by NewCode",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
    orientation: "portrait",
    start_url: "/",
    icons: [
      {
        src: "/icons/icon-x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-x512.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
  };
}
