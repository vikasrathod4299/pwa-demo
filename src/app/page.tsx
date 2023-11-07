import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12s bg-white">
      <div>
        <p className="text-3xl w-full">PMJAY Hospitals</p>
      </div>
      <div className="">
        <Input />
      </div>
    </main>
  );
}
