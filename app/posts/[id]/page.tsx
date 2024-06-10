import prisma from "@/app/lib/db"
import { notFound } from "next/navigation";

export default async function Page({ params }:{params: { id :string}}) {
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(params.id),
      }
    });
    if(!post){
      notFound();
    }



  return (
    <main className="px-7 pt-24 text-center"> 
     <h1 className="text-4xl font-semibold mb-7">
        {post.title}
     </h1>
     <p className="max-w-[700px] mx-auto text-l">
        {post.body}
     </p>
    </main>
  )
}
