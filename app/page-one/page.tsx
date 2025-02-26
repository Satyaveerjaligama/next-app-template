// "use client";
// import { useEffect } from "react";

const PageOne = () => {
  // need to make this component async and test loading screen by uncommenting below line
  //   await new Promise((resolve) => setTimeout(resolve, 4000));

  //   to test the error boundary uncomment below line
  //   useEffect(() => {
  //     throw new Error("Random Error");
  //   }, []);

  return <p>Page 1</p>;
};

export default PageOne;
