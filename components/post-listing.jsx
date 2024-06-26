/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bqH7yPIg0ug
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from 'next-view-transitions'
import { getRelativeDate } from '@/utils/helper';
import { formatFullDate } from '@/utils/helper';
import Image from "next/image";
import client from "@/utils/directus";
import { readItems } from '@directus/sdk';
import React from 'react';

async function getPostData(searchParams) {
  let posts = [];
  if (searchParams.cate && searchParams.cate !== "all") {
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

export default async function PostListing({ searchParams }) {

  console.time(`getPostData-${searchParams.cate}`);
  const posts = await getPostData(searchParams);
  console.timeEnd(`getPostData-${searchParams.cate}`);

  return (
    <div className="space-y-8 p-4 md:p-6 lg:p-8">
      {posts.map((post) => (
        <React.Fragment key={post.id}>
          <article key={post.id} className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
            <div className="flex-shrink-0 w-full md:w-[200px] h-[150px] md:h-[120px] overflow-hidden rounded-lg">
              <Image
                src={post.cover ? `${process.env.NEXT_PUBLIC_ASSETS_URL}${post.cover}` : "https://placehold.co/600x400?text=Post"}
                alt="Post Thumbnail"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-2">
              <h2 className="text-xl font-bold hover:underline underline-offset-auto">
                <Link href={`/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <div>
                <p className="text-gray-500" title={formatFullDate(post.date_created)}>{getRelativeDate(post.date_created)}</p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">{post.description}</p>
              <Link href={`/posts/${post.slug}`} className="text-primary-500 hover:text-primary-600 font-medium">
                Read More
              </Link>
            </div>
          </article>
          <hr />
        </React.Fragment>
      ))}

      {/* <article className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
        <div className="flex-shrink-0 w-full md:w-[200px] h-[150px] md:h-[120px] overflow-hidden rounded-lg">
          <img
            src="https://placehold.co/600x400?text=Post"
            alt="Post Thumbnail"
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 space-y-2">
          <h2 className="text-xl font-bold">
            <Link href="#" prefetch={false}>
              Unlocking the Secrets of Productivity: Tips and Tricks
            </Link>
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Discover the ultimate guide to maximizing your productivity and achieving your goals with our expert
            insights.
          </p>
          <Link href="#" className="text-primary-500 hover:text-primary-600 font-medium" prefetch={false}>
            Read More
          </Link>
        </div>
      </article> */}
    </div>
  )
}