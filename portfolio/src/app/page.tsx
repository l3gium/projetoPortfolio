import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justily-between items-center h-screen px-4 px-4 md:px-10">
      <div className="w-48 h-48 md:w-64 md:h-64 relative">
        <Image src="/miguel.jpg" alt="Foto do Miguel" layout="fill" objectFit="cover" className="rounded-full" />
      </div>
      {/* z-10 */}
      <div className="flex flex-col justify-center items-start p-4 text-white text-center md:text-left ">
        <h1 className="text-2xl md:text-4xl font-bold">Olá, eu sou o l3gium</h1>
        <p className="text-sm md:text-lg mt-2">
          Sou um desenvolvedor full-stack com foco em back end apaixonado por desenvolver lógicas criativas
        </p>
      </div>
    </div>
  );
}
