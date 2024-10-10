import { Cards, Footer, Header, Hero } from "../components";

export const HomePage = () => {
  return (
    <main className="flex flex-col gap-16">
      <Header />
      <div className="p-5">
        <Hero />
      </div>
      <Footer />
    </main>
  );
};
