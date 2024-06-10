import createPost from "@/actions/actions";
import Form from "@/components/Form";

export default async function CreatePost() {
    // const { isAuthenticated } = getKindeServerSession();
    // if(!(await isAuthenticated())){
    //     redirect("api/auth/login?post_login_redirect_url=/create-post");
    // }

  return (
    <main className="text-center pt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Create Post
        </h1>
        <Form />
    </main>
  )
}
