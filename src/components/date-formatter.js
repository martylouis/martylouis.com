import { parseISO, format } from 'date-fns';

const DateFormatter = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLL	dd, yyyy')}</time>;
};

export default DateFormatter;
