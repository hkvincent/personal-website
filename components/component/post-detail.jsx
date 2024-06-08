/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/30YEv9dZ7Iy
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Chivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { marked } from 'marked';
import { formatFullDate, formatHalfDate } from '@/utils/helper';


export async function PostDetail({ title, author, date, content, readTime }) {
  var htmlData = marked(content, { headerIds: false, mangle: false });

  return (
    (<div className="max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-gray mx-auto dark:prose-invert">
        <div className="space-y-2 not-prose">
          <h1
            className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
            {title}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
              <Avatar className="w-8 h-8 border">
                <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>{author}</span>
            </div>
            <span className="hidden md:block">•</span>
            <time className="text-gray-500 dark:text-gray-400 hidden md:block">
              {formatFullDate(date)}
            </time>
            <span className="md:hidden block">•</span>
            <time className="text-gray-500 dark:text-gray-400 md:hidden block">
              {formatHalfDate(date)}
            </time>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </div>
        <article className="prose mt-4 md:mt-8" dangerouslySetInnerHTML={{ __html: htmlData }} />
      </article>
    </div>)
  );
}
