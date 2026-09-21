export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://crave-noir.vercel.app/sitemap.xml",
    host: "https://crave-noir.vercel.app",
  };
}
