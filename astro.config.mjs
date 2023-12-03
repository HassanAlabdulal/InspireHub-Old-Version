// import { defineConfig } from "astro/config";
// import tailwind from "@astrojs/tailwind";
// import react from "@astrojs/react";
// import node from "@astrojs/node";

// import vercel from "@astrojs/vercel/serverless";

// export default defineConfig({
//   integrations: [tailwind(), react()],
//   output: "server",
//   adapter: vercel()
// });
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
});
