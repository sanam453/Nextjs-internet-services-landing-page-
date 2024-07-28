import { Navbar, Hero, Products, Resources } from "./components";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/tech.jpg')] opacity-5 h-screen bg-cover bg-center bg-no-repeat w-full absolute" />
      <main className="relative w-full container mx-auto">
        <Navbar />
        <Hero />
        <Products />
        <Resources />
      </main>
    </>
  );
}
