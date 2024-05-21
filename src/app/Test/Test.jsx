import React from 'react';

const Test = () => {

  const data = {
    name: 'Sanjay Kumar',
    email: 'ms',
    phone: '1234567890',
    location: 'India',
    github: 'dsds',
    linkedin: 'dsds',
    summary: 'I am a Full Stack Developer with a passion for learning and teaching. I have experience working with JavaScript, React, Node, Express, MongoDB, and more. I am always looking for opportunities to learn and grow as a developer.',
  };
  

  return (
    <div id="a4" className="bg-white text-black" style={{ width: '210mm', height: '297mm', margin: '0 auto', fontFamily: 'Poppins, sans-serif' }}>
      <div className="p-6 text-[#c4a079] bg-[#0c3760] text-main flex gap-6 justify-between">
        <div className="w-[20%] flex items-center justify-center">
          <img id="profilePic" src="https://ik.imagekit.io/fjxdttxtzx/profilePictures/sanjay_pic_J-Vk7vDPD.jpg" alt="profile" className="rounded-full w-[120px] h-[120px]" />
        </div>
        <div className="max-w-[40%] flex flex-col justify-center items-center break-all uppercase">
          <span className="text-center text-2xl font-bold">{data.name}</span>
          <span className="text-center text-sm">Aspiring Full Stack Developer</span>
        </div>
        <div className="text-xs max-w-[40%] min-w-[25%] flex justify-center break-all flex-wrap items-start flex-col">
          <div className="gap-2 flex flex-col justify-center items-start">
            <div className="flex gap-1 items-center">
              <div className="bg-[#c4a079] p-1 rounded-full">...</div>
              <div>{data.email}</div>
            </div>
            <div className="flex gap-1 items-center">
              <div className="bg-[#c4a079] p-1 rounded-full">...</div>
              <div>{data.phone}</div>
            </div>
            <div className="flex gap-1 items-center">
              <div className="bg-[#c4a079] p-1 rounded-full">...</div>
              <div>{data.location}</div>
            </div>
            <div className="flex gap-1 items-center">
              <div className="bg-[#c4a079] p-1 rounded-full">...</div>
              <a href={data.github} target="_blank" rel="noreferrer">{data.github}</a>
            </div>
            <div className="flex gap-1 items-center">
              <div className="bg-[#c4a079] p-1 rounded-full">...</div>
              <a href={data.linkedin} target="_blank" rel="noreferrer">{data.linkedin}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid" style={{ gridTemplateColumns: '1fr 1px 2fr', width: '210mm', wordWrap: 'break-word', overflowWrap: 'anywhere' }}>
        <div className="p-6 col-span-1">
          <div className="gap-2 flex flex-col">
            <h1 className="uppercase text-sm text-[#c4a079] font-semibold text-main">Summary</h1>
            <p className="text-xs">{data.summary}</p>
            <div className="ant-divider css-dev-only-do-not-override-1kuana8 ant-divider-horizontal bg-[#c4a079] h-[1px] rounded-lg mt-1 mb-3" role="separator"></div>
          </div>
          {/* Add more sections as needed */}
        </div>
        <div className="col-span-1 bg-[#c4a079] my-6 rounded-lg"></div>
        <div className="p-6 col-span-1">
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default Test;
