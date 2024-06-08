import React from 'react';
import client from "@/utils/directus";
import { readItems } from '@directus/sdk';
import { getRelativeDate } from '@/utils/helper';
import Link from 'next/link';
import { formatFullDate } from '@/utils/helper';
export const metadata = {
    title: 'Posts',
};

export const revalidate = 60;

const page = async () => {
    async function getPostData() {
        const posts = await client.request(readItems("personal_blog", {
            fields: [
                "slug",
                "title",
                "date_created",
                "description",
            ],
        }));
        return posts;
    }

    const posts = await getPostData();

    return (
        <>
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
        </>
    );
};

export default page;