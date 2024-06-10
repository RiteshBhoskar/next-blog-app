"use server"

import prisma from "@/app/lib/db"
import { revalidatePath } from "next/cache"

export default async function createPost(formData: FormData) {
    const title = formData.get("title") as string
    const body = formData.get("body") as string

    await prisma.post.create({
        data:{
            title,
            body
        }
    })
    revalidatePath("/posts")
}


