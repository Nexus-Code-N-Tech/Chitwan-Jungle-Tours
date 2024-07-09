import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="h-screen flex items-center justify-center text-9xl">
        BODY
      </div>

      {/*Move it to Footer folder */}
      <div className="grid fixed bottom-0 left-5 bg-[#401A33] items-center justify-center grid-flow-row w-12 h-52 rounded-2xl  z-40">
        <div>💀</div>
        <div>💀</div>
        <div>💀</div>
        <div>💀</div>
        <div>💀</div>
      </div>
    </>
  );
}
