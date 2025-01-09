export const revalidate = 5;

interface User {
  name: {
    first: string;
  };
}

interface ApiResponse {
  results: User[];
}

const page = async () => {
  const data = await fetch("https://randomuser.me/api/?results=10");
  const result: ApiResponse = await data.json();

  return (
    <ul>
      {result?.results?.map((item: User, id: number) => (
        <li key={id}>{item.name.first}</li>
      ))}
    </ul>
  );
};

export default page;
