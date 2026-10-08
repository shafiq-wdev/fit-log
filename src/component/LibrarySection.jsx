import React from 'react';
import LibraryCard from './LibraryCard';

const getLibrary = async () => {
  try {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching library data:", error);
    return null;
  }
};

const LibrarySection = async () => {
  const libraryData = await getLibrary();
  console.log(libraryData,"libraryData");

  return (
    <section className="mx-auto my-[50px] w-full max-w-7xl bg-[#0d0f12] p-6 text-white">
      <h1 className="font-sans text-3xl font-black uppercase tracking-tight text-white">
        THE LIBRARY
      </h1>
      <p className="mt-1 font-sans text-sm font-normal text-slate-400">
        Twelve lifts covering every major muscle group.
      </p>
            <div className='container mx-auto grid grid-cols-3 gap-4 my-[30px]'>
            {
            libraryData.map((library,ind)=>{
                return <LibraryCard key={ind} library={library}/>
            })

           }
           </div>
      
    </section>
  );
};

export default LibrarySection;