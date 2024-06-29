import { createDirectus, rest, readItems, staticToken } from '@directus/sdk';
import { unstable_cache } from 'next/cache';

const client = createDirectus(process.env.NEXT_PUBLIC_API_URL).with(rest()).with(staticToken(process.env.ADMIN_TOKEN))

export const getPersonalData = unstable_cache(async () => {
  const personal = await client.request(readItems('personal', {
    fields: [
      "*"
    ],
  }))
  return personal;
}, ["get-personal-data"], { revalidate: 1800 });

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
