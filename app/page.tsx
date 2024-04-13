import NewsSection from "./section/NewsSection";

export async function generateMetadata({}) {
  return { title: "Головна | UkraineHorizon" };
}

export default function Home() {
  return (
    <>
      <NewsSection />
    </>
  );
}
