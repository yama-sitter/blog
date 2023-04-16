export type Props = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export const Head: React.FC<Props> = ({ title, description, children }) => (
  <head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="description" content={description} />
    {children}
  </head>
);
