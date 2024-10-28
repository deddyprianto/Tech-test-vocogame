import HomeComponent from "@/component/UseHome/Container";

async function getData() {
  const res = await fetch(
    "https://6708f839af1a3998ba9fdc6e.mockapi.io/api/v1/products",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return data;
}

export default async function HomePage() {
  const res = await getData();
  return <HomeComponent data={res} />;
}
