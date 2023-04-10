export type Props = {
  children?: React.ReactNode;
};

export const Footer: React.FC<Props> = ({ children }) => (
  <footer className="footer footer-center p-4">{children}</footer>
);
