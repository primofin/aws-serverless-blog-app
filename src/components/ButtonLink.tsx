import { Link } from 'react-router-dom';
type ButtonLinkProps = {
  text: string;
  link: string;
  type?: 'primary' | 'secondary';
};
const ButtonLink = ({ text, link, type = 'primary' }: ButtonLinkProps) => {
  return (
    <Link className={`button-link button-link__${type}`} to={link}>
      {text}
    </Link>
  );
};

export default ButtonLink;
