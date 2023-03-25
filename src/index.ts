import { server } from "./server/server";

server.listen(process.env.PORT, () => {
  console.log("Server is listening on port 5000");
});
