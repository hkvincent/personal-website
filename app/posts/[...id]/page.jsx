import React from 'react';
import { readItems, readItem } from '@directus/sdk';
import client from "@/utils/directus";
import { PostDetail } from '@/components/component/post-detail';
import { formatFullDate, getReadingTime } from '@/utils/helper';




export const metadata = {
    title: 'Post Detail',
};

const page = async ({ params }) => {
    async function getPostDetail() {
        console.log(params)
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
    const posts = await getPostDetail();
    const post = posts[0];
    return (
        <div className='flex justify-start'>
            <PostDetail title={post.title} author={post.user_created.first_name + " " + post.user_created.last_name} date={post.date_created} readTime={getReadingTime(post.body)}
                content={post.body}
            />
        </div>
    );
};

export default page;