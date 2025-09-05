import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://cdn.myanimelist.net/images/anime/**'),
      new URL("https://bnetcmsus-a.akamaihd.net/cms/**"),
      new URL("https://raw.githubusercontent.com/**"),
      new URL("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**")
    ]
  }
};

export default nextConfig;
