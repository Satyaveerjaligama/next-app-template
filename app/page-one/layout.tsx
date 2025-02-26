import React from "react";

const PageOneLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <p>Page One layout</p>
      {children}
    </>
  );
};

export default PageOneLayout;
