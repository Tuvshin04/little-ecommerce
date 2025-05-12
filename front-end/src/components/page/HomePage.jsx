import { Footer, Header, Hero } from "../components";

export const HomePage = () => {
  return (
    <main className="flex flex-col gap-16 via-purple-900">
      <Header />
      <div className="p-5">
        <Hero />
      </div>
      <Footer />
    </main>
  );
};
