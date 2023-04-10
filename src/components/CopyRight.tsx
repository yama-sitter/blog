export type Props = {
  year: string;
  author: string;
  link: string;
};

export const CopyRight: React.FC<Props> = ({ year, author, link }) => (
  <div>
    <p className="text-xs text-base-content/70">
      &copy;{` ${year} - `}
      <a className="link" href={link} target="_blank" rel="noopener noreferrer">
        {author}
      </a>
    </p>
  </div>
);
