import { useMemo } from "react";
import type { Article } from "@lib/api";
import { stripHtml } from "@lib/strip-html";
import { DateBadge } from "@components/DateBadge";

export type Props = {
  article: Article;
};

export const Preview: React.FC<Props> = ({ article }) => {
  const foreword = useMemo(() => stripHtml(article.body), [article]);

  return (
    <div className="py-6 flex flex-row-reverse justify-between md:gap-10 items-start">
      {article.image && (
        <a href={`/${article.id}`} className="shrink-0">
          <img
            src={article.image.url}
            alt={article.title}
            width="160"
            height="160"
            className="w-20 h-20 md:w-40 md:h-40 rounded bg-base-200 object-cover"
          />
        </a>
      )}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">
          <a className="hover:underline" href={`/${article.id}`}>
            {article.title}
          </a>
        </h2>
        <DateBadge date={article.publishedAt} />
        <p className="text-sm text-base-content/70 truncated">{foreword}</p>
      </div>
    </div>
  );
};
