import { createDirectus, rest, readItems, staticToken } from '@directus/sdk';

const client = createDirectus(process.env.NEXT_PUBLIC_API_URL).with(rest()).with(staticToken(process.env.ADMIN_TOKEN))

export const getPersonalData = async () => {
  const personal = await client.request(readItems('personal', {
    fields: [
      "*"
    ],
  }))
  return personal;
};

export const getPersonalDataWithPage = async () => {
  const personal = await client.request(readItems("personal", {
    fields: [
      "*", // Select all fields
      "pages.title",
      "pages.path",
      "icons.*",
    ],
  }));
  return personal;
};

export default client;
