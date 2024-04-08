export default function Servers({ params }: { params: any }) {
  console.log(params);
  return <div>{params.serverName}</div>;
}
