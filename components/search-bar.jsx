"use client"
import React, { useState, useEffect } from 'react';
import { OramaCloud, useSearch } from '@oramacloud/client/react'
import { usePathname } from 'next/navigation';
import { Link } from 'next-view-transitions';
import { debounce } from 'lodash';

export default function SearchBar() {

  const pathName = usePathname();
  if (pathName.split('/')[2]) return null;


  return (
    <OramaCloud endpoint='https://cloud.orama.run/v1/indexes/www-vincentchan-top-hjali6' apiKey='F37bKrbHd5rBiM0Ns0wXWq382GPMI7Pr'>
      <SearchContainer />
    </OramaCloud>
  )
}


function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  const { results, error } = useSearch({
    term: debouncedSearchTerm,
    limit: 5
  });

  // console.log(results);

  useEffect(() => {
    const handler = debounce((value) => {
      if (value.length > 4) {
        setDebouncedSearchTerm(value);
      } else {
        setDebouncedSearchTerm('');
      }
    }, 300);

    handler(searchTerm);

    // Cleanup function to cancel debounce in case of component unmount
    return () => {
      handler.cancel();
    };
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Enter search keyword..."
        value={searchTerm}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {searchTerm && results && results.hits.length > 0 && (
        <div className="absolute top-full left-0 right-0  p-4 bg-white border border-gray-300 rounded shadow-lg z-10">
          <ul className="list-disc pl-5">
            {results.hits.map((hit) => (
              <li key={hit.id} className="mb-2">
                <Link href={hit.document.path} className="text-blue-500">
                  {hit.document.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {searchTerm && !results?.hits.length && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white border border-gray-300 rounded shadow-lg z-10">
          <div className="text-gray-500">No results found</div>
        </div>
      )}
      {error && (
        <div className="text-red-500">Error: {error.message}</div>
      )}
    </div>
  );
}