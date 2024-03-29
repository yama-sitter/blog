import { createClient } from "microcms-js-sdk";

import type {
  MicroCMSListResponse,
  MicroCMSQueries,
  MicroCMSImage,
} from "microcms-js-sdk";

export type Article = {
  id: string;
  publishedAt: string;
  title: string;
  category: string[];
  image: MicroCMSImage;
  body: string;
  ogpImageUrl: string;
};

export type ArticleResponse = MicroCMSListResponse<Article>;

const client = createClient({
  serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY,
});

export const fetchArticles = async (queries?: MicroCMSQueries) => {
  return await client.get<ArticleResponse>({ endpoint: "articles", queries });
};

export const fetchArticle = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Article>({
    endpoint: "articles",
    contentId,
    queries,
  });
};
