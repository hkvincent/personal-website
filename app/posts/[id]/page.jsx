import React, { Suspense } from 'react';
import { readItems, clearCache } from '@directus/sdk';
import client from "@/utils/directus";
import { PostDetail } from '@/components/component/post-detail';
import { getReadingTime } from '@/utils/helper';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export const metadata = {
  title: 'Posts Detail',
};

const page = async ({ params }) => {
  async function getPostDetail() {
    // const post = await client.request(readItems("personal_blog", {
    //   fields: [
    //     "*",
    //     {
    //       user_created: ['id', 'first_name', 'last_name'],
    //     },
    //   ],

    // }));

    // using fetch https://blog-directus.zeabur.app/items/personal_blog?access_token=kMyt4I21Ko8FLSe9vSp3gMaTXGwxZLQU&filter={ "slug": { "_eq": "ai-agent-rag" }}
    const post = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items/personal_blog?access_token=${process.env.ADMIN_TOKEN}&filter={ "slug": { "_eq": "${params.id}" }}&fields[]=*&fields[]=user_created.id&fields[]=user_created.first_name&fields[]=user_created.last_name`, { cache: 'no-store' })

    return post;
  }
  // wait for 3 seconds
  // await new Promise(resolve => setTimeout(resolve, 3000));

  // cal getPostDetail function time consuming
  // console.time('getPostDetail');
  const posts = await getPostDetail();
  const postJson = await posts.json();
  const post = postJson.data[0];
  // console.timeEnd('getPostDetail');

  // console.time('getReadingTime');
  const readTime = getReadingTime(post.body);
  // console.timeEnd('getReadingTime');

  return (
    <div className='flex justify-start'>
      <Suspense fallback={<p>loading.....</p>}>
        <ScrollToTopButton />
        <PostDetail title={post.title} author={post.user_created.first_name + " " + post.user_created.last_name} date={post.date_created} readTime={readTime}
          content={post.body}
        />
      </Suspense>
    </div>
  );
};

export default page;
