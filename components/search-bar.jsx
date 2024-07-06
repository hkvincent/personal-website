"use client"
import React, { useState, useEffect, useRef } from 'react';
import { OramaCloud, useSearch } from '@oramacloud/client/react'
import { usePathname } from 'next/navigation';
import { Link } from 'next-view-transitions';
import { debounce } from 'lodash';

export default function SearchBar() {

  const pathName = usePathname();
  if (pathName.split('/')[2]) return null;

  return (
    <OramaCloud endpoint='https://cloud.orama.run/v1/indexes/posts-p3svnw' apiKey='3A4dS138cybwL8GYys4iYq7Y4fKA1GWb'>
      <SearchContainer />
    </OramaCloud>
  )
}

function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handler = debounce((value) => {
      if (value.length > 4) {
        setDebouncedSearchTerm(value);
        setIsDropdownVisible(true);
      } else {
        setDebouncedSearchTerm('');
        setIsDropdownVisible(false);
      }
    }, 300);

    handler(searchTerm);

    return () => {
      handler.cancel();
    };
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    } else if (containerRef.current && containerRef.current.contains(event.target)) {
      setIsDropdownVisible(true);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto" ref={containerRef}>
      <input
        type="text"
        placeholder="Enter search keyword..."
        value={searchTerm}
        onChange={handleInputChange}
        className="w-full p-2 mb-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {debouncedSearchTerm.length > 4 && isDropdownVisible && (
        <SearchResult term={debouncedSearchTerm} />
      )}
    </div>
  );
}


function SearchResult({ term }) {
  const { results, error } = useSearch({
    term,
    limit: 5
  });

  return (
    <>
      {results && results.hits.length > 0 && (
        <div className="absolute top-full left-0 right-0 p-4 bg-white border border-gray-300 rounded shadow-lg z-10">
          <ul className="list-disc pl-5">
            {results.hits.map((hit) => (
              <li key={hit.id} className="mb-2">
                <Link href={`/posts/${hit.document.slug}`} className="text-blue-500">
                  {hit.document.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {term && results && results.hits.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white border border-gray-300 rounded shadow-lg z-10">
          <div className="text-gray-500">No results found</div>
        </div>
      )}
      {error && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white border border-gray-300 rounded shadow-lg z-10 text-red-500">
          Error: {error.message}
        </div>
      )}
    </>
  );
}
