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
"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { marked } from 'marked';
import { formatFullDate, formatHalfDate } from '@/utils/helper';
import { useState, useEffect, useRef } from 'react';

export function PostDetail({ title, author, date, content, readTime }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState('');
  const contentRef = useRef(null);

  const toggleModal = () => {
    setModalOpen(prev => {
      return !prev;
    });
  };

  useEffect(() => {
    const images = contentRef.current.querySelectorAll('img');
    const handleClick = (event) => {
      setSelectedImageSrc(event.target.src);
      toggleModal();
    };

    images.forEach(img => {
      img.addEventListener('click', handleClick);
    });

    // Cleanup function to remove the event listeners
    return () => {
      images.forEach(img => {
        img.removeEventListener('click', handleClick);
      });
    };
  }, [content, modalOpen]);

  const renderer = new marked.Renderer();
  renderer.image = function (href, title, text) {
    return `<img src="${href}" alt="${text}" style="cursor: pointer;" />`; // Removed inline `onclick`
  };

  var htmlData = marked(content, { renderer, headerIds: false, mangle: false });

  return (
    <div className="max-w-3xl px-4 sm:px-6 lg:px-8 py-4">
      <ImageModal src={selectedImageSrc} isOpen={modalOpen} onClose={toggleModal} />
      <article className="prose prose-gray mx-auto dark:prose-invert">
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
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
        <div ref={contentRef} className="prose mt-4 md:mt-8" dangerouslySetInnerHTML={{ __html: htmlData }} />
      </article>
    </div>
  );
}

const ImageModal = ({ src, alt, isOpen, onClose }) => {
  if (!isOpen) return null;

  const modalContentRef = useRef(null); // Ref for the modal content

  const handleOverlayClick = (event) => {
    // Check if the click was outside the modal content
    if (!modalContentRef.current.contains(event.target)) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={handleOverlayClick}>
      <div className="bg-white p-2 rounded" ref={modalContentRef} onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className="max-w-full max-h-full" />
        <button onClick={onClose} className="absolute top-0 right-0 p-2 text-black">
          Close
        </button>
      </div>
    </div>
  );
};