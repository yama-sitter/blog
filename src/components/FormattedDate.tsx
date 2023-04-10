export type Props = {
  date: string;
};

const dateFormat = new Intl.DateTimeFormat("ja-JP");
const formatDate = (date: string) => dateFormat.format(Date.parse(date));

export const FormattedDate: React.FC<Props> = ({ date }) => (
  <time dateTime={date}>{formatDate(date)}</time>
);
