import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AdSense1 = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <script
          src="https://alwingulla.com/88/tag.min.js"
          data-zone="62319"
          async
          data-cfasync="false"
        ></script>
      </Helmet>
    </HelmetProvider>
  );
};

export default AdSense1;
