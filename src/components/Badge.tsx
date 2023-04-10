export type Props = {
  children: React.ReactNode;
};

export const Badge: React.FC<Props> = ({ children }) => (
  <span className="badge badge-ghost">{children}</span>
);
