import { app } from "@workspace/api";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";

export default async function Home() {
  const response = await app.users.get();

  return (
    <main className="flex h-dvh items-center justify-center">
      <div className="flex flex-col gap-4">
        <h1
          className={cn(
            "bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text py-4 text-8xl font-bold text-transparent",
          )}
        >
          {response.data?.length
            ? response.data.map((user) => user.firstName)
            : "No data"}
        </h1>
        <Button>Click me</Button>
      </div>
    </main>
  );
}
