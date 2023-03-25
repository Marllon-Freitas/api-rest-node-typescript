import { server } from "./server/server";

server.listen(process.env.PORT || 5500, () => {
  console.log("Server is listening on port 5500");
});
