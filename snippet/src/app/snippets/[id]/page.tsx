import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

const PageDetails = async ({ params }: { params: { id: string } }) => {
  const id = parseInt((await params).id);

  const snippets = await prisma.snippet.findUnique({
    where: {
      id: id,
    },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">{snippets.title}</h1>
        <div className="flex gap-2">
          <Link href={`/snippets/${id}/edit`}>

            <Button variant="outline">Edit</Button>
          </Link>
          <Button variant="destructive">Delete</Button>
        </div>
      </div>
      <div>
        <pre className="bg-gray-100 p-4 rounded mt-4">
          <code>{snippets.code}</code>
        </pre>
      </div>
    </div>
  );
};

export default PageDetails;
