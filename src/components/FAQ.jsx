import React from 'react';

const FAQs = () => {
    return (
       <div className='my-5 h-auto'>
        <h1 className='text-5xl bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent text-center my-2 py-4 font-bold '> FAQs </h1>
        <div className="flex items-center justify-center h-auto">
  <div className="flex-col align-center space-y-4 w-1/2">
    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lgp-4"
      >
        <h2 className="font-medium text-center text-black py-4 ">Where are we located?</h2>

        <svg
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>

      <p className="mt-4 px-4 leading-relaxed bg-orange-300 rounded-xl py-3 text-gray-700">
        We are located in Reading and operate all throughout berkshire
      </p>
    </details>

    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-blue-50 p-4 text-blue-900"
      >
        <h2 className="font-medium">Who are the founders?</h2>

        <svg
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>

      <p className="mt-4 px-4 leading-relaxed text-gray-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
        recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
        consequuntur distinctio corporis earum similique!
      </p>
    </details>

    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-blue-50 p-4 text-blue-900"
      >
        <h2 className="font-medium">How to contact us?</h2>

        <svg
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>

      <p className="mt-4 px-4 leading-relaxed text-gray-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
        recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
        consequuntur distinctio corporis earum similique!
      </p>
    </details>
  </div>
</div>
       </div>
    );
};

export default FAQs;
