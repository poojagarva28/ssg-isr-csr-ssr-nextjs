"use client";

import { useEffect, useState } from "react";

interface User {
  name: {
    first: string;
  };
}

interface ApiResponse {
  results: User[];
}

const CSR = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("https://randomuser.me/api/?results=10");
      const result: ApiResponse = await data.json();
      setData(result.results);
    };
    getData();
  }, []);

  return (
    <div>
      <ul>
        {data?.map((item: User, id: number) => (
          <li key={id}>{item.name.first}</li>
        ))}
      </ul>
    </div>
  );
};

export default CSR;
