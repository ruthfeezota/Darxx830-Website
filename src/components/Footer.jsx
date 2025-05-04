import React from 'react'

function Footer() {
  return (
    <div>
    <footer className="block">
      <div className="py-16 md:py-20 mx-auto w-full max-w-screen-4xll px-5 md:px-10">
        <div className="flex-col flex items-center">
          <div className="text-center font-semibold font-exo space-x-[200px]">
            <a href="/" className="inline-block px-6 py-2 font-normal text-white transition hover:text-blue-600">
            About
            </a>
            <a href="/" className="inline-block px-6 py-2 font-normal text-white transition hover:text-blue-600">
            New Music
            </a>
            <a href="/" className="inline-block px-6 py-2 font-normal text-white transition hover:text-blue-600">
            Blog
            </a>
            <a href="/" className="inline-block px-6 py-2 font-normal text-white transition hover:text-blue-600">
            Contact
            </a>
       
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer