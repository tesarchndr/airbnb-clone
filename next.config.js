/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoidGVzYXJjaG5kciIsImEiOiJjbGxtZmEybHgyZWI4M3BtazZoa2VzdmZ2In0.BXorAg4IKAeQKEUggMuQZQ'
  },
};

module.exports = nextConfig;
