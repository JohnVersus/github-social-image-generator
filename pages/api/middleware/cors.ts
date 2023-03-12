import Cors from "cors";

const BASEPATH = process.env.NEXT_PUBLIC_BASEPATH + "/";
export const allowedOrigins = [
  "https://webapi.johnversus.dev/",
  "https://tools.johnversus.dev/" + BASEPATH,
  "http://127.0.0.1:3000/" + BASEPATH,
  "http://localhost:3000/" + BASEPATH,
];
export const cors = Cors({
  methods: ["GET"],
  origin: function (origin, callback) {
    // allow requests with no origin
    // (like mobile apps or curl requests)

    console.log({ origin });
    if (!origin) return callback(null, true);

    if (origin && allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      const msg = `The CORS policy does not allow access from the specified origin: ${origin}`;
      callback(new Error(`${msg}`));
    }
  },
});
