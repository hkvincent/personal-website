import { Directus } from "@directus/sdk";
const directus = new Directus(process.env.NEXT_PUBLIC_API_URL as string, {
  auth: {
    staticToken: process.env.ADMIN_TOKEN as string,
  },
});

export const getPersonalData = async () => {
  const personal = await directus.items("personal").readByQuery({
    fields: [
      "*", // Select all fields
    ],
  });
  return personal.data;
};

export const getPersonalDataWithPage = async () => {
  const personal = await directus.items("personal").readByQuery({
    fields: [
      "*", // Select all fields
      "pages.title",
      "pages.path",
      "icons.*",
    ],
  });
  return personal.data;
};

export default directus;
