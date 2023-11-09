"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const HospitalsPage = () => {
  const searchParams = useSearchParams();
  console.log(searchParams.get("state"));

  return <div>Hello</div>;
};

export default HospitalsPage;
