import { after } from "next/server";
import { client } from "~/sanity/lib/client";
import { BLOGPOST_VIEWS_QUERY } from "~/sanity/lib/queries";
import { writeClient } from "~/sanity/lib/write-client";

export default async function TheEye({ id }: { id: string }) {
  const views = await client
    .withConfig({ useCdn: false })
    .fetch(BLOGPOST_VIEWS_QUERY, { id });

  after(
    async () =>
      await writeClient
        .patch(id)
        .inc({ views: 1 })
        // .set({ views: totalViews + 1 })
        .commit(),
  );

  return (
    <div className="inline-flex gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
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
      <p>{views?.views}</p>
    </div>
  );
}
