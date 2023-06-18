export type Props = {
  title: string;
  description: string;
  image?: string;
  url: string;
};

export const OGP: React.FC<Props> = ({ title, description, image, url }) => (
  <>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {image && (
      <>
        <meta name="twitter:image" content={image} />
        <meta name="twitter:image:alt" content={title} />
      </>
    )}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {image && (
      <>
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={title} />
      </>
    )}
    <meta property="og:site_name" content={title} />
    <meta property="og:type" content="object" />
    <meta property="og:url" content={url} />
  </>
);
