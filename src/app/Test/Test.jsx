import React from 'react';
import Lottie from 'react-lottie';
import { arrowLottie } from '../../assets';

const Test = () => {
  return (
    <div>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: arrowLottie,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        height={400}
        width={400}
      />
    </div>

  );
};

export default Test;
