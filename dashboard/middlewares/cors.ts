import Cors from "cors";

const cors = Cors({
  methods: ["GET", "HEAD"],
  origin: [
    "http://localhost:3000",
    "https://nextjs-run-time-integration-glowing-fiesta.vercel.app/",
  ],
});

export { cors };
