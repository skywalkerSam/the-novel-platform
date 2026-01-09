import SearchForm from "./_components/SearchForm";
import { sanityFetch, SanityLive } from "~/sanity/lib/live";
import { SEARCH_QUERY } from "~/sanity/lib/queries";
import BlogpostCard, {
  type BlogpostCardType,
} from "../feed/_components/BlogpostCard";
import Footer from "~/components/Footer";

// export default async function Search({
//   searchParams,
// }: {
//   searchParams: Promise<{ query?: string }>;
// }) {
//   const query = (await searchParams).query;

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string | string[] }>;
}) {
  const query = (await searchParams)?.query;
  const searchQuery = Array.isArray(query) ? query[0] : query;
  const params = { search: searchQuery ?? null };
  // const searchQuery = query?.[0] ?? query;

  const { data: posts } = await sanityFetch({ query: SEARCH_QUERY, params });

  return (
    <>
      <main className="via-primary flex flex-col items-center bg-linear-to-b from-transparent to-transparent">
        <div className="mt-10 flex items-center justify-center">
          <SearchForm query={searchQuery}></SearchForm>
        </div>
        <section className="section_container">
          <div className="mt-10 mb-10">
            {searchQuery ? `Search results for "${searchQuery}"` : ""}

            {/* {query
              ? Array.isArray(query)
                ? `Search results for "${query.join(", ")}"`
                : `Search results for "${query}"`
              : ""} */}
            {/* {query ? `Search results for "${query}"` : ""} */}
          </div>
          <ul className="card_grid mt-7">
            {posts?.length > 0 &&
              posts.map((post: BlogpostCardType) => (
                <BlogpostCard key={post?._id} post={post} />
              ))}
          </ul>
          {(!posts || posts.length === 0) && (
            <div className="mt-6">
              <p className="no-results text-3xl text-red-400/60">
                No blogposts found .(
              </p>
            </div>
          )}
          {/* <ul className="card_grid mt-7">
            {posts?.length > 0 ? (
              posts.map((post) => <BlogpostCard key={post?._id} post={post} />)
            ) : (
              <p className="no-results text-3xl text-red-400/60">
                no blogposts found .(
              </p>
            )}
          </ul> */}
        </section>
      </main>
      <Footer></Footer>
      <SanityLive></SanityLive>
    </>
  );
}
