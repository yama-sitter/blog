export type Props = {
  children?: React.ReactNode;
};

export const Head: React.FC<Props> = ({ children }) => (
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width" />
    {children}
  </head>
);
