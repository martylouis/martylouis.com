import DateFormatter from '@components/date-formatter';
import Link from 'next/link';
import { H3 } from '@components/typography';

const PostPreview = ({ title, date, preview, link }) => (
  <Link href={link}>
    <a className="block px-3 py-2 -mx-3 border-2 rounded border-gray-50 hover:border-gray-100">
      <p className="font-mono text-sm text-gray-400">
        <DateFormatter dateString={date} />
      </p>
      <H3 className="mt-2">{title}</H3>
      <h3>{preview}</h3>
    </a>
  </Link>
);

export default PostPreview;
