// import { Suspense } from "react";
// import { client } from "~/sanity/lib/client";
// import {
//   PLAYLIST_BY_SLUG_QUERY,
//   AUTHOR_BY_ID_QUERY,
// } from "~/sanity/lib/queries";
// import { notFound } from "next/navigation";
// import { formatDate } from "~/lib/utils";
// import markdownit from "markdown-it";
// import { Skeleton } from "../../_components/Skeleton";
// import { View } from "../_components/View";
// import BlogpostCard, {
//   type BlogpostCardType,
// } from "../../_components/BlogpostCard";
// import Link from "next/link";
// // import Image from "next/image";
// // export const experimental_ppr = true;
//
// const md = markdownit();
//
// export default async function Blogpost({ params }: { params: Promise<{ id: string }> }) {
//   const id = (await params).id;
//
//   const [post, editorsPicks] = await Promise.all([
//     client.fetch(AUTHOR_BY_ID_QUERY, { id }),
//     client.fetch(PLAYLIST_BY_SLUG_QUERY, {
//       slug: "editors-picks",
//     }),
//   ]);
//
//   // const post = await client.fetch(AUTHOR_BY_ID_QUERY, { id });
//
//   // const editorsPicks = await client.fetch(PLAYLIST_BY_SLUG_QUERY, {
//   //   slug: "editors-picks",
//   // });
//
//   if (!post) return notFound();
//
//   const parsedContent = md.render(post?.content ?? "");
//
//   return (
//     <>
//       <section className="pink_container !min-h-[230px]">
//         <p className="tag">{formatDate(post?._createdAt)}</p>
//
//         <h1 className="heading">{post?.title}</h1>
//         <p className="sub-heading !max-w-5xl">{post?.description}</p>
//       </section>
//
//       <section className="section_container">
//         <img
//           src={post?.image}
//           alt="thumbnail"
//           className="h-auto w-full rounded-xl"
//         />
//
//         <div className="mx-auto mt-10 max-w-4xl space-y-5">
//           <div className="flex-between gap-5">
//             <Link
//               href={`/user/${post?.author?._id}`}
//               className="mb-3 flex items-center gap-2"
//             >
//               <img
//                 src={post?.author?.image}
//                 alt="avatar"
//                 width={64}
//                 height={64}
//                 className="rounded-full drop-shadow-lg"
//               />
//
//               <div>
//                 <p className="text-20-medium">{post?.author.name}</p>
//                 <p className="text-16-medium !-300">
//                   @{post?.author.username}
//                 </p>
//               </div>
//             </Link>
//
//             <p className="category-tag">{post?.category}</p>
//           </div>
//
//           <h3 className="text-30-bold">Pitch Details</h3>
//           {parsedContent ? (
//             <article
//               className="prose font-work-sans max-w-4xl break-all"
//               dangerouslySetInnerHTML={{ __html: parsedContent }}
//             />
//           ) : (
//             <p className="no-result">No details provided</p>
//           )}
//         </div>
//
//         <hr className="divider" />
//
//         {/* {posts?.length > 0 && (
//           <div className="mx-auto max-w-4xl">
//             <p className="text-30-semibold">Editor Picks</p>
//
//             <ul className="card_grid-sm mt-7">
//               {posts.map((post: BlogpostCardType, i: number) => (
//                 <BlogpostCard key={i} post={post} />
//               ))}
//             </ul>
//           </div>
//         )} */}
//
//         {editorsPicks?.length > 0 && (
//           <div className="mx-auto max-w-4xl">
//             <p className="text-30-semibold">Editor&apos;s Picks...</p>
//
//             <ul className="card_grid-sm mt-7">
//               {editorsPicks.map((post: BlogpostCardType, i: number) => (
//                 <BlogpostCard key={i} post={post} />
//               ))}
//             </ul>
//           </div>
//         )}
//
//         <Suspense fallback={<Skeleton className="view_skeleton" />}>
//           <View id={id} />
//         </Suspense>
//       </section>
//     </>
//   );
// };
//
//
