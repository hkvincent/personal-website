import React, { Suspense } from 'react';
import { readItems, readItem } from '@directus/sdk';
import client from "@/utils/directus";
import { PostDetail } from '@/components/component/post-detail';
import { getReadingTime } from '@/utils/helper';

export const metadata = {
  title: 'Post Detail',
};

const page = async ({ params }) => {
  async function getPostDetail() {
    const post = await client.request(readItems("personal_blog", {
      fields: [
        "*",
        {
          user_created: ['id', 'first_name', 'last_name'],
        },
      ],
      where: {
        slug: params.id
      }
    }));
    return post;
  }
  // wait for 3 seconds
  // await new Promise(resolve => setTimeout(resolve, 3000));

  // cal getPostDetail function time consuming
  // console.time('getPostDetail');
  const posts = await getPostDetail();
  const post = posts[0];
  // console.timeEnd('getPostDetail');

  // console.time('getReadingTime');
  const readTime = getReadingTime(post.body);
  // console.timeEnd('getReadingTime');

  return (
    <div className='flex justify-start'>
      <Suspense fallback={<p>loading.....</p>}>
        <PostDetail title={post.title} author={post.user_created.first_name + " " + post.user_created.last_name} date={post.date_created} readTime={readTime}
          content={post.body}
        />
      </Suspense>
    </div>
  );
};

export default page;