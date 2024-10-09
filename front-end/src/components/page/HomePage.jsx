import { Cards, Footer, Header, Hero } from "../components";

export const HomePage = () => {
  return (
    <main className="flex flex-col gap-16">
      <Header />
      <div className="grid grid-cols-4 gap-10 ">
        <Hero />
      </div>
      <Footer />
    </main>
  );
};
