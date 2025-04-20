import { Cards, Footer, Header, Hero } from "../components";

export const ProductPage = () => {
  return (
    <main className="flex flex-col gap-16">
      <Header />
      <div className="p-5">
        <Cards />
      </div>
      <Footer />
    </main>
  );
};
