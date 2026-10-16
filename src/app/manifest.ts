import type { MetadataRoute } from "next";
import { basePath, siteDescription, siteName } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: siteName,
    description: siteDescription,
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
  };
}
