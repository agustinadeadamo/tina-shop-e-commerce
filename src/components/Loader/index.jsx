import React from 'react';

const Loader = () => {
  return (
    <div
      className="min-h-[40vh] w-full flex items-center justify-center z-50"
      role="alert"
      aria-busy="true"
      aria-live="assertive"
    >
      <div className="w-[36px] h-[36px] border-4 border-solid border-gray-200 border-l-tertiary rounded-full animate-spin" />
    </div>
  );
};

export default Loader;
