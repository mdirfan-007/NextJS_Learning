import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

const page = async () => {
  const snippets = await prisma.snippet.findMany();

  return (
    <div>
      <h1 className="text-4xl">Home</h1>
      <div className="flex justify-between items-center mt-3">
        <h1 className="text-xl">Snippet</h1>
        <Link href="/snippets/new">
          <Button className="text-lg" variant="outline">
            New
          </Button>
        </Link>
      </div>

      <div>
        {snippets.map((snippet) => (
          <div
            key={snippet.id}
            className="p-2 bg-gray-300 border rounded-md flex items-center justify-between mt-2"
          >
            <h2 className="text-2xl">{snippet.title}</h2>
            <Link href={`/snippets/${snippet.id}`}>
              <Button
                variant="link"
                className="mt-2 cursor-pointer bg-transparent bg-gradient-to-r from-amber-600 via-amber-600/60 to-amber-600 [background-size:200%_auto] text-white hover:bg-transparent hover:bg-[99%_center] focus-visible:ring-amber-600/20 dark:from-amber-400 dark:via-amber-400/60 dark:to-amber-400 dark:focus-visible:ring-amber-400/40"
              >
                View
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
