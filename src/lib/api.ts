import { createClient } from 'microcms-js-sdk';

import type {
  MicroCMSListResponse,
  MicroCMSQueries,
  MicroCMSImage,
} from 'microcms-js-sdk';

export type Article = {
  id: string;
  publishedAt: string;
  title: string;
  category: string[];
  image: MicroCMSImage;
  description: string;
  body: string;
};

export type ArticleResponse = MicroCMSListResponse<Article>;

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export const fetchArticles = async (queries?: MicroCMSQueries) => {
  return await client.get<ArticleResponse>({ endpoint: 'articles', queries });
};

export const fetchArticle = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Article>({
    endpoint: 'articles',
    contentId,
    queries,
  });
};
