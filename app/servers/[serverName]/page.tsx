export async function generateStaticPaths() {
  return {
    paths: [{ params: { serverName: "anigma" } }],
    fallback: false,
  };
}

export default function Servers({ params }: { params: any }) {
  console.log(params);
  return <div>{params.serverName}</div>;
}
