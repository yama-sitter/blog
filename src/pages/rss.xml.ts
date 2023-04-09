import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import { fetchArticles } from "@lib/api";
import type { Article } from "@lib/api";
import { siteName, siteDescription } from "@data/site";

const articleToRSSFeedItem = (
  { id, title, body, publishedAt }: Article,
  site: string,
) => ({
  link: `${site}/${id}`,
  title,
  content: body,
  pubDate: new Date(publishedAt),
});

export const get = async (context: APIContext) => {
  const site = context.site.toString();
  const articles = await fetchArticles();
  const rssFeedItems = articles.contents.map((article) =>
    articleToRSSFeedItem(article, site),
  );

  return rss({
    title: siteName,
    description: siteDescription,
    site,
    items: rssFeedItems,
  });
};
