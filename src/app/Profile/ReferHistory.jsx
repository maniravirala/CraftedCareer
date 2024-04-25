import React from "react";

const ReferHistory = () => {
  const referredUsers = [
    {
      name: "John Doe",
      joinedDate: "2021-10-01",
    },
    {
      name: "Jane Doe",
      joinedDate: "2021-10-02",
    },
    {
      name: "Alice Doe",
      joinedDate: "2021-10-03",
    },
    {
      name: "Bob Doe",
      joinedDate: "2021-10-04",
    },
    {
        name: "Charlie Doe",
        joinedDate: "2021-10-05",
    }
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Referral History</h1>
      <div className="flex flex-col gap-4">
        {referredUsers.map((user, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
          >
            <div className="flex items-center gap-4">
              <img
                src={`https://randomuser.me/api/portraits`}
                alt="profile"
                className="rounded-full h-12 w-12"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">{user.name}</h1>
                <p className="text-gray-400 text-sm">{user.joinedDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-gray-400 text-sm">
                Joined on {user.joinedDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferHistory;
