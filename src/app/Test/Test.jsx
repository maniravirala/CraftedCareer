import React from "react";
import CountUp from "react-countup"; 

const Test = () => {
  const AnimatedNumber = ({ number }) => {
    return (
      <div className="text-4xl font-bold text-center">
        {/* countup the number from number / 2 to number */}
        <CountUp end={number} start={number / 2} duration={5} />
      </div>
    );
  }

  return (
    <div
      className={`h-[calc(100vh-4rem)] flex flex-col gap-4 items-center justify-center`}
    >
      <AnimatedNumber number={255.9} />

      <CountUp
        end={255.9}
        start={100}
        duration={5}
        separator=","
        decimal="."
        decimals={2}
        prefix="$"
        suffix=" USD"
      />
    </div>
  );
};

export default Test;
