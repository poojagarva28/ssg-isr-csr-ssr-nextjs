interface User {
  name: {
    first: string;
  };
}

interface ApiResponse {
  results: User[];
}

export const getData = async (): Promise<User[]> => {
  const data = await fetch("https://randomuser.me/api/?results=10");
  const result: ApiResponse = await data.json();
  return result?.results;
};

const page = async () => {
  const data = await getData();
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

export default page;
