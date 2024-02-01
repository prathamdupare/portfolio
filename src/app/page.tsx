import Navbar from "@/components/Navbar";

import MainSection from "./MainSection";

export default function Home() {
  return (
    <main className="flex w-full h-screen ">
      <div className="w-full">
        {" "}
        <Navbar />
        <MainSection />
      </div>
    </main>
  );
}
