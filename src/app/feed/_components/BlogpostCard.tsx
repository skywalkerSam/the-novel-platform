import { cn, formatDate } from "~/lib/utils";
// import { EyeIcon } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";
import { Button } from "~/components/ui/button";
import type { Author, Blogpost } from "sanity.types";
import { Skeleton } from "./Skeleton";

export type BlogpostCardType = Omit<Blogpost, "author"> & {
  author?: Author;
};

// const BlogpostCard = ({ post }: { post: Partial<Blogpost> }) => {
const BlogpostCard = ({ post }: { post: BlogpostCardType }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;

  return (
    <li className="blogpost-card group">
      <div className="flex-between">
        <p className="blogpost-card_date">
          {_createdAt ? formatDate(_createdAt) : "—"}
        </p>
        {/* <p className="blogpost-card_date ">{formatDate(_createdAt)}</p> */}
        <div className="flex gap-1">
          {/* <EyeIcon className="size-6 " /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            // stroke="black"
            className="size-6 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <span className="text-16-medium">{views ?? 0}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          {/* <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link> */}
          <Link href={`/feed/blogpost/${_id}`}>
            <h3 className="text-26-semibold text-primary font-paprika">{title}</h3>{" "}
            {/* line-clamp-1 */}
          </Link>
        </div>
        {author?._id ? (
          <Link href={`/feed}`}>
            {/*<Link href={`/author/${author?._id}`}>*/}
            <img
              src={
                typeof author?.image === "string"
                  ? author.image
                  : "https://avatars.githubusercontent.com/u/95934821?v=4"
              }
              // src={author?.image ?? "https://github.com/starboy-inc.png"}
              alt={author?.name ?? "Author"}
              width={48}
              height={48}
              className="rounded-full"
            />
          </Link>
        ) : (
          <img
            src={"https://avatars.githubusercontent.com/u/203412260?v=4"}
            alt={"Author image"}
            width={48}
            height={48}
            className="rounded-full"
          />
        )}

        {/* <Link href={`/author/${author?._id}`}>
          <img
            src={author?.image ?? "https://github.com/starboy-inc.png"}
            alt={author?.name ?? "Author"}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link> */}
      </div>

      <Link href={`/feed/blogpost/${_id}`}>
        <p className="blogpost-card_desc">{description}</p>

        <img
          src={image ?? "https://github.com/starboy-inc.png"}
          alt="Cover image"
          className="blogpost-card_img"
        />
      </Link>

      <div className="flex-between mt-5 gap-3">
        {category ? (
          <Link
            href={`/search?query=${encodeURIComponent(category.toLowerCase())}`}
          >
            <p className="text-16-medium hover:underline">{category}</p>
          </Link>
        ) : (
          <span className="text-16-medium text-muted-foreground">
            Uncategorized
          </span>
        )}
        {/* <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link> */}
        <Button variant={"ghost"} asChild>
          <Link href={`/feed/blogpost/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export const BlogpostCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="blogpost-card_skeleton" />
      </li>
    ))}
  </>
);

export default BlogpostCard;
