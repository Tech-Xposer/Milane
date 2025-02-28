export default function handler(req, res) {
    const baseUrl = "https://www.restaurantmilane.fr";
  
    const urls = [
      "/",
      "/menu",
      "/about",
      "/contact",
      "/gallery",
      "/reservations"
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
    <url>
      <loc>${baseUrl}${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${url === "/" ? "daily" : "weekly"}</changefreq>
      <priority>${url === "/" ? "1.0" : "0.8"}</priority>
    </url>`
      )
      .join("")}
  </urlset>`;
  
    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(sitemap);
  }
  