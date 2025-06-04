import { formatDate } from "app/blog/utils";
import Link from "next/link";

type ListObjProps = {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
};

type ListProps = {
  posts: ListObjProps[];
};

export function List({ posts }: ListProps) {
  return (
    <div>
      {posts.map((post) => (
        <div className="w-full flex gap-1 md:gap-0 flex-col md:flex-row md:space-x-2 mt-4">
          <div className="flex-1 width-[50%]">
            <p className="w-full text-neutral-600 dark:text-neutral-400 tabular-nums">
              {post.startDate}
              {post?.endDate ? " - " + post.endDate : ""}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-bold">
              {post.title}
            </p>
          </div>
          <div className="flex-1 width-[50%]">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
