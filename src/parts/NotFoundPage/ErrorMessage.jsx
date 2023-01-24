import React from "react";

// import components & parts
import Button from "../../components/Button";

export default function ErrorMessage() {
  return (
    <div className="error flex h-screen w-full items-center justify-center transition-all duration-400 dark:bg-gray-900">
      <div className="error__data text-center">
        <h1 className="error__title section-title xl:text-[36px]">
          404 Not Found
        </h1>
        <p className="error__text section-text pb-8">
          The page you're looking for was not found. <br />
          Please, check the URL again.
        </p>
        <Button url="/" className="error__button xs:inline-flex">
          Back to home
        </Button>
      </div>
    </div>
  );
}
