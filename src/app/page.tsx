"use client";
import Dropdown from "@/components/Dropdown";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
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

  return (
    <main className="min-h-screen h-screen bg-green-100/30 p-8">
      <div className="relative top-20 text-center text-slate-800 ">
        <p className="text-3xl w-full font-normal drop-shadow-md">
          <span className="font-extrabold italic">PMJAY </span>Hospitals
        </p>
      </div>
      <div className="relative top-40 flex flex-col rounded-lg gap-y-14 bg-green-100 shadow-md p-4">
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
      <div className="relative top-52">
        <Link
          href={`/hospitals/${values.taluka}`}
          className={cn(buttonVariants(), ["w-full"])}
        >
          Get Hospitals
        </Link>
      </div>
    </main>
  );
}
