import React from 'react';
import { readItems } from '@directus/sdk';
import client from "@/utils/directus";
import PathLink from '@/components/path-link';
import { Suspense } from 'react'

export default async function PostLayout({ children }) {
  async function getCateDetail() {
    const categories = await client.request(readItems("personal_category", {
      fields: [
        "slug",
        "status",
        "title",
        "description",
      ], sort: "title"
    }));
    return categories;
  }

  const cateResult = await getCateDetail();
  const pathMap = cateResult.map((item) => {
    item.path = `/posts?cate=${item.slug}`;
    return item;
  });
  // add / at the first of the path
  pathMap.unshift({ title: 'All', path: '/posts' });

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='w-5/6 p-4'>
        {children}
      </div>
      <aside className="w-1/6 p-4 md:border-l">
        <div className='ml-4'>
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <ul className="space-y-2 ml-2">
            <Suspense >
              <PathLink pagePaths={pathMap} searchParam={true} />
            </Suspense>
          </ul>
        </div>
      </aside>
    </div>
  );
}
