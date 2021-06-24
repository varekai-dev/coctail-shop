import React from "react";
import ContentLoader from "react-content-loader";

export default function LoadingBlock() {
  return (
    <div className="pizza-block">
      <ContentLoader
        speed={2}
        width={300}
        height={460}
        viewBox="0 0 300 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="140" cy="140" r="140" />
        <rect x="0" y="293" rx="6" ry="6" width="307" height="24" />
        <rect x="1" y="335" rx="6" ry="6" width="298" height="80" />
        <rect x="0" y="430" rx="6" ry="6" width="112" height="27" />
        <rect x="150" y="430" rx="13" ry="13" width="150" height="30" />
      </ContentLoader>
    </div>
  );
}
