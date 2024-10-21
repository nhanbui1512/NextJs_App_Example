"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrease}>Increase</button>
      <br />
      <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  );
}
