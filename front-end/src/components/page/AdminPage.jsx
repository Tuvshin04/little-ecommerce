import { AdminPageHero, Footer, Header } from "../components";

export const AdminPage = () => {
  return (
    <main className="flex flex-col gap-16">
      <Header />
      <div className="p-5">
        <AdminPageHero />
      </div>
      <Footer />
    </main>
  );
};
