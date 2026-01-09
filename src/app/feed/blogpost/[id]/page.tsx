import MarkdownIt from "markdown-it";
import Image from "next/image";
import Link from "next/link";
import Footer from "~/components/Footer";
import { formatDate } from "~/lib/utils";
import { client } from "~/sanity/lib/client";
import { BLOGPOST_BY_ID_QUERY } from "~/sanity/lib/queries";
import TheEye from "../_components/TheEye";
// import { Suspense } from "react";
// import { Skeleton } from "../../_components/Skeleton";
// import { Button } from "~/components/ui/button";
// import { useRouter } from "next/router";
// import DOMPurify from "isomorphic-dompurify";

export default async function BlogpostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const post = await client.fetch(BLOGPOST_BY_ID_QUERY, { id });
  const md = MarkdownIt();
  const parsedContent = md.render(post?.content ?? "");
  // const rawContent = md.render(post?.content ?? "");
  // const parsedContent = DOMPurify.sanitize(rawContent, {
  //   USE_PROFILES: { html: true },
  // });

  // const router = useRouter();

  return (
    <>
      <section className="flex items-center justify-center gap-4 p-4 md:p-8 lg:p-12">
        <div>
          <h1 className="font-paprika hover:text-primary mt-6 mb-6 text-7xl font-bold">
            {post?.title}
          </h1>
          <p className="ml-4">{post?.description}</p>
        </div>
        {post?.image && (
          <Image
            src={post?.image}
            alt="Cover image"
            width={900}
            height={600}
            className="rounded-lg"
          ></Image>
        )}
      </section>
      <section className="p-4 md:p-8 lg:p-12">
        {/* <Image src={post?.author?.image?.asset?._ref ?? ""} alt="Author image" width={60} height={60}/> */}
        <div className="flex-between flex">
          <div className="w-12 flex-none">
            {post?.author?.image && (
              <Link href={`/feed}`}>
                {/*<Link href={`/user/${post?.author?._id}`}>*/}
                <Image
                  src={post?.author?.image}
                  alt="Author image"
                  width={60}
                  height={60}
                  className="rounded-full drop-shadow-lg drop-shadow-black dark:drop-shadow-white"
                />
              </Link>
            )}
          </div>
          <div className="w-36 flex-none">
            <Link href={`/user/${post?.author?._id}`}>
              <div className="hover:text-primary mt-4 ml-2">
                <p>
                  <span>@</span>
                  {post?.author?.username ?? ""}
                </p>
              </div>
            </Link>
          </div>

          {/* <p>{post?.author?.name}</p> */}
          {/* Check for undefined to avoid TSBS.) */}
          <div className="mt-4 ml-4 flex flex-1 items-end justify-end">
            <p>
              <span className="mr-1 font-bold">•</span>
              {post?._createdAt && formatDate(post?._createdAt)}
            </p>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center font-paprika">
        {parsedContent ? (
          <article
            className="prose max-w-7xl break-all"
            dangerouslySetInnerHTML={{ __html: parsedContent }}
          />
        ) : (
          <p>Blogpost coming soon...(</p>
        )}
      </section>

      <div className="flex-between m-4 p-4">
        {/* <p className="py-2 text-2xl font-semibold">Categories...</p> */}
        {post?.category ? (
          <Link
            href={`/search?query=${encodeURIComponent(post?.category.toLowerCase())}`}
          >
            <p className="border-accent-foreground hover:text-primary rounded-full border-2 p-2 font-semibold hover:underline">
              {post?.category}
            </p>
          </Link>
        ) : (
          <p className="text-red-500">Uncategorized.(</p>
        )}
        <TheEye id={id}></TheEye>
      </div>

      <Footer></Footer>
    </>
  );
}
