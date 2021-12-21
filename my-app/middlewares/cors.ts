import Cors from "cors";

const cors = Cors({
  methods: ["GET", "HEAD"],
});

export { cors };
