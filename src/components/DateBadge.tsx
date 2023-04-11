import { Badge } from "@components/Badge";
import { FormattedDate } from "@components/FormattedDate";
import type { Props as FormattedDateProps } from "@components/FormattedDate";

export type Props = FormattedDateProps;

export const DateBadge: React.FC<Props> = ({ date }) => (
  <Badge>
    <FormattedDate date={date} />
  </Badge>
);
