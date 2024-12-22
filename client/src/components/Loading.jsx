import React from "react";

const Loading = () => {
  return (
    <>
      <div class="h-screen flex justify-center items-center">
        <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-primary"></div>
        <img src="/logo.svg" class="rounded-full h-16 w-16" />
      </div>
    </>
  );
};

export default Loading;
