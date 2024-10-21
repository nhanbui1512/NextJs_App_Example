"use client";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Trang với ID: {id}</h1>
    </div>
  );
};

export default Page;
