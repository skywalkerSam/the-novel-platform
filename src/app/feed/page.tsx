import { BLOGPOSTS_QUERY } from "~/sanity/lib/queries";
import BlogpostCard, {
  type BlogpostCardType,
} from "./_components/BlogpostCard";
// import { client } from "~/sanity/lib/client";
import Footer from "~/components/Footer";
import { sanityFetch, SanityLive } from "~/sanity/lib/live";

export default async function UserFeed() {
  const { data: posts } = await sanityFetch({ query: BLOGPOSTS_QUERY });

  // const posts = await client.fetch(BLOGPOSTS_QUERY);
  // const posts = await sanityFetch({ query: BLOGPOSTS_QUERY });

  // console.log(JSON.stringify(posts, null, 2));

  // const posts = [
  //   {
  //     _id: 1,
  //     _createdAt: "2025.08.21",
  //     views: 69,
  //     author: { _id: 1, name: "Starboy" },
  //     description: "Who tf knows...",
  //     image:
  //       "https://images.unsplash.com/photo-1619491202102-088c4afb271c?ixid=M3w4ODczOHwwfDF8Y29sbGVjdGlvbnw4OHxiSERoNEFlN084b3x8fHx8Mnx8MTc0Mjk3ODk5MHw&ixlib",
  //     category: "Existence",
  //     title: "The inevitable Void of Absolute Nothingness",
  //   },
  // ];
  return (
    <>
      <main className="via-primary flex flex-col items-center bg-linear-to-b from-transparent to-transparent">
        <section className="section_container">
          <ul className="card_grid mt-7">
            {posts?.length > 0 ? (
              posts.map((post: BlogpostCardType) => (
                <BlogpostCard key={post?._id} post={post} />
              ))
            ) : (
              <p className="no-results text-3xl text-red-400/60">
                no blogposts found .(
              </p>
            )}
          </ul>
        </section>
      </main>
      <Footer></Footer>
      <SanityLive></SanityLive>
    </>
  );
}
