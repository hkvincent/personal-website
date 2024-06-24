"use client";
import React from 'react';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { Link } from 'next-view-transitions'

const PathLink = ({ pagePaths }) => {
  const pathname = usePathname();

  // Helper function to determine if the link should be active
  const isActive = (path) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <>
      {pagePaths.map((page) => (
        <p className="sm:mt-2 mx-2 sm:mx-0 hover:underline text-xl" key={page.title}>
          <Link href={page.path} className={`${isActive(page.path) && "underline-offset-2 underline decoration-2 decoration-lime-800 rounded-lg"}`}>
            {page.title}
          </Link>
        </p>)
      )}
    </>
  );
};

export default PathLink;