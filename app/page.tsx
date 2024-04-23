import NewsSection from "./section/NewsSection";

export async function generateMetadata({}) {
  return { title: "Головна | ukrainehorizon" };
}

export default function Home() {
  return (
    <>
      <NewsSection />
    </>
  );
}
