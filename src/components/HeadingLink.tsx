import { Link } from 'react-router-dom';

type HeadingLinkProps = {
  text: string;
  link: string;
};

const HeadingLink = ({ text, link }: HeadingLinkProps) => {
  return (
    <Link to={link} className="heading-link">
      {text}
    </Link>
  );
};

export default HeadingLink;
