import { api } from "@/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="flex flex-col items-center gap-2">
      <p>{hello.data ? hello.data.greeting : "Loading tRPC query..."}</p>
    </div>
  );
}
