import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/services/", "/terms/", "/privacy/", "/data/" ] 

        },

         sitemap: "https://yourdomain.com/sitemap.xml",
    }
}