export type Props = {
  title: string;
  description: string;
  image: string;
  url: string;
};

export const OGP: React.FC<Props> = ({ title, description, image, url }) => (
  <>
    <meta name="twitter:card" content="summary_large_image" />
    {title && <meta name="twitter:title" content={title} />}
    {description && <meta name="twitter:description" content={description} />}
    <meta name="twitter:image" content={image} />
    {title && <meta name="twitter:image:alt" content={title} />}
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    <meta property="og:image" content={image} />
    {title && <meta property="og:image:alt" content={title} />}
    {title && <meta property="og:site_name" content={title} />}
    <meta property="og:type" content="object" />
    <meta property="og:url" content={url} />
  </>
);
