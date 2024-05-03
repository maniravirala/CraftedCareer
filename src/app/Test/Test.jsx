import React from "react";
import AdSense1 from "../../components/AdSense/AdSense1";

const Test = () => {
  const link1 =
    "https://www.highcpmgate.com/eby4xfhxj?key=1c45b22cbf289e802f228c57e5bae1e0";
  const link2 =
    "https://www.highcpmgate.com/k47vsuqswz?key=34301e33e2c786f34e6d18031a7aea6c";
  const link3 = "https://glaultoa.com/4/7416741";
  const link4 = "https://eephoawaum.com/4/7416872";

  return (
    <div>
      <div>
        <h1>Test</h1>

        <a href={link1} target="_blank" rel="noreferrer">
          Link 1
        </a>
        <br />
        <a href={link2} target="_blank" rel="noreferrer">
          Link 2
        </a>
        <br />
        <a href={link3} target="_blank" rel="noreferrer">
          Link 3
        </a>
        <br />
        <a href={link4} target="_blank" rel="noreferrer">
          Link 4
        </a>
      </div>

      <AdSense1 />
    </div>
  );
};

export default Test;
