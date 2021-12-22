export const RENDER_API =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3002/api"
    : "https://mfe-frameworks-loader.vercel.app/api";
