import React from 'react';
import client from "@/utils/directus";
import { readItems } from '@directus/sdk';
import { getRelativeDate } from '@/utils/helper';
import Link from 'next/link';
import { formatFullDate } from '@/utils/helper';
import PostListing from '@/components/post-listing';

export const metadata = {
  title: 'Posts',
};

// export const revalidate = 60;

const page = async ({ searchParams }) => {
  async function getPostData() {
    let posts = [];
    if (searchParams.cate) {
      posts = await client.request(readItems("personal_blog", {
        fields: [
          "slug",
          "title",
          "date_created",
          "cover",
          "description",
        ],
        filter: {
          category: {
            slug: searchParams.cate
          }
        },
        sort: "-date_created"
      }));
    } else {
      posts = await client.request(readItems("personal_blog", {
        fields: [
          "slug",
          "title",
          "date_created",
          "cover",
          "description",
        ], sort: "-date_created"
      }));
    }

    return posts;
  }

  const posts = await getPostData();
  // wait for 3 seconds
  // await new Promise(resolve => setTimeout(resolve, 3000));

  return (
    // <PostListingNoStyle posts={posts} />
    <PostListing posts={posts} />
  );
};

export default page;

function PostListingNoStyle({ posts }) {
  return <>
    <div className='mt-4'>
      {posts.map((post) => (
        <div key={post.id} className="mb-3">
          <div className='flex items-end gap-4'>
            <Link href={`/posts/${post.slug}`} className=' hover:underline underline-offset-auto'>
              <h2 className="text-2xl font-bold">{post.title}</h2>
            </Link>
            <p className="text-gray-500" title={formatFullDate(post.date_created)}>{getRelativeDate(post.date_created)}</p>
          </div>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  </>;
}
