import Footer from "~/components/Footer";

export default function HomePage() {
  return (
    <>
      <main className="via-primary flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-transparent to-transparent font-paprika">
        <div className="container flex flex-col items-center justify-center">
          <p className="text-2xl font-extrabold tracking-tight md:text-[2rem]">
            Welcome to
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight md:text-[5rem]">
            The Novel
          </h1>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
