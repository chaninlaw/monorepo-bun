import { client } from "@repo/api";
import { Button } from "@repo/ui/components/button";
import { cn } from "@repo/ui/lib/utils";

export default async function Home() {
  const response = await client.index.get();

  return (
    <main className="flex h-dvh items-center justify-center">
      <div className="flex flex-col gap-4">
        <h1
          className={cn(
            "bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text py-4 text-8xl font-bold text-transparent",
          )}
        >
          {response.data}
        </h1>
        <Button onClick={async () => {}}>Click me</Button>
      </div>
    </main>
  );
}
