"use client";
import Dropdown from "@/components/Dropdown";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
interface Data {
  state: string;
  district: string;
  taluka: string;
}
export default function Home() {
  const [values, setValues] = useState<Data>({
    state: "",
    district: "",
    taluka: "",
  });

  const params = new URLSearchParams({ ...values });

  return (
    <main className="min-h-screen h-screen p-8 bg-white">
      <div className="text-center my-12">
        <p className="text-3xl w-full">PMJAY Hospitals</p>
      </div>
      <div className="flex flex-col gap-y-14">
        <Dropdown endpoint={"state"} setValues={setValues} />
        <Dropdown
          endpoint={"district"}
          setValues={setValues}
          filter={values.state}
        />
        <Dropdown
          endpoint={"taluka"}
          filter={values.district}
          setValues={setValues}
        />
      </div>
      <div className="my-4">
        <Link
          href={`/hospitals?${params}`}
          className={cn(buttonVariants(), ["w-full"])}
        >
          Get hospitals
        </Link>
      </div>
    </main>
  );
}
