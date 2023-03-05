import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "s4ckfdz8",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25",
});

export default sanityClient;
