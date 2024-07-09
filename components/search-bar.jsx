"use client"
import React, { useState, useEffect, useRef } from 'react';
import { OramaCloud, useSearch } from '@oramacloud/client/react';
import { usePathname } from 'next/navigation';
import { Link } from 'next-view-transitions';
import { debounce } from 'lodash';
import { FaSearch } from 'react-icons/fa'; // Importing the magnifier icon

export default function SearchBar() {
  const pathName = usePathname();
  if (pathName.split('/')[2]) return null;

  return (
    <OramaCloud endpoint='https://cloud.orama.run/v1/indexes/posts-p3svnw' apiKey='3A4dS138cybwL8GYys4iYq7Y4fKA1GWb'>
      <SearchContainer />
    </OramaCloud>
  );
}

function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

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

  // Adding the shortcut key event listener
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        setIsDropdownVisible(true);
        inputRef.current.focus();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        setIsDropdownVisible(false);
        inputRef.current.blur();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto" ref={containerRef}>
      <div className="flex items-center border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-500">
        <FaSearch className="ml-2 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
          ref={inputRef}
          className="w-full p-2 bg-transparent focus:outline-none"
        />
        <div className="px-2 flex items-center">
          <kbd className="bg-gray-200 text-gray-700 px-1 rounded">Ctrl</kbd>
          <span className="mx-1 text-gray-500">+</span>
          <kbd className="bg-gray-200 text-gray-700 px-1 rounded">K</kbd>
        </div>
      </div>
      {debouncedSearchTerm.length > 4 && isDropdownVisible ?
        (<div key="search"> <SearchResult term={debouncedSearchTerm} /> </div>)
        : (<div className='hidden' key="search"> <SearchResult term={debouncedSearchTerm} /></div>)}
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
        <div className="absolute top-full left-0 right-0 p-4 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10">
          <ul className="list-disc pl-5">
            {results.hits.map((hit) => (
              <li key={hit.id} className="mb-2">
                <Link href={`/posts/${hit.document.slug}`} className="text-blue-500">
                  <span className="text-blue-500 hover:underline hover:text-blue-900 transition duration-200 cursor-pointer">
                    {hit.document.title}
                  </span>
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
