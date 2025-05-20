import React from 'react';
import Image from 'next/image';

const ComingSoon = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-[94%] max-w-screen-xl border-[3px] rounded-2xl px-10 py-8" style={{ borderColor: '#4B7D57' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          
          {/* Left Side: Text */}
          <div className="space-y-5">
            <h1 className="text-5xl font-extrabold" style={{ color: '#4B7D57' }}>
              COMING SOON!
            </h1>

            <p className="text-base text-gray-800 leading-relaxed">
              We’re rebuilding our site to make your experience<br />
              even more seamless and enjoyable.
            </p>

            <p className="text-base text-gray-800 font-medium">
              Stay Connected, Stay Updated!
            </p>

            <p className="text-base text-gray-800">
              For more enquiry :{' '}
              <a href="mailto:contact@transcurators.com" className="underline">
                contact@transcurators.com
              </a>
            </p>
          </div>

          {/* Right Side: Illustration */}
          <div className="relative w-full h-60 md:h-80">
            <Image 
              src="/coming soon hs.png" 
              alt="Website rebuild illustration"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
