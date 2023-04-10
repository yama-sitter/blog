import { Badge } from "@tmp-components/Badge";
import { FormattedDate } from "@tmp-components/FormattedDate";
import type { Props as FormattedDateProps } from "@tmp-components/FormattedDate";

export type Props = FormattedDateProps;

export const DateBadge: React.FC<Props> = ({ date }) => (
  <Badge>
    <FormattedDate date={date} />
  </Badge>
);
