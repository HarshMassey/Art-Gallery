export default function manifest() {
  return {
    id: "/",
    name: "Art Gallery",
    short_name: "Art",
    description:
      "Art Gallery: Handmade sketch and paintings for any occasion. Browse our collection of stunning artworks by skilled artists. Choose or request your preferred style, size, and medium. Visit us today and find your happiness.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    orientation: "portrait",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
      },
    ],
  };
}
