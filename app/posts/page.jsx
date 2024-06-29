import React, { Suspense } from 'react';
import { getRelativeDate } from '@/utils/helper';
import Link from 'next/link';
import { formatFullDate } from '@/utils/helper';
import PostListing from '@/components/post-listing';
import PostListSkeleton from '@/components/postlist-skelton';

export const metadata = {
  title: 'Posts',
};
// export const revalidate = 60;
const page = async ({ searchParams }) => {
  // wait for 3 seconds
  // await new Promise(resolve => setTimeout(resolve, 3000))
  return (
    // <PostListingNoStyle posts={posts} />
    <Suspense key={JSON.stringify(searchParams.cate)} fallback={<PostListSkeleton />}>
      <PostListing key={JSON.stringify(searchParams.cate)} searchParams={searchParams} />
    </Suspense>
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
