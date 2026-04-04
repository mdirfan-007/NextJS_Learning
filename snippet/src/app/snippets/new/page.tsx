import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {

async function createSnippet (formData:FormData){
    'use server'
    const title = formData.get('title') as string
    const code = formData.get('code') as string

    const snippet = await prisma.snippet.create({
        data:{
            title,
            code
        }
    })

    console.log('create snippet',snippet)
    redirect('/')

}

  return (
    <form action={createSnippet}>
      <div>
        <Label htmlFor="title">Title</Label>
        <Input type="text" id="title" name="title" />
      </div>
      <div className="mt-3">
        <Label htmlFor="code">Code</Label>
        <Textarea id="codeArea" name="code" />
      </div>
        <div className="mt-3">
            <Button type="submit">Add</Button>
        </div>

    </form>
  );
};

export default page;
