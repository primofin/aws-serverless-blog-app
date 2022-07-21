type ButtonLinkProps = {
  text: string;
  link: string;
  type?: 'primary' | 'secondary';
};
const ButtonLink = ({ text, link, type = 'primary' }: ButtonLinkProps) => {
  return (
    <a className={`button-link button-link__${type}`} href={link}>
      {text}
    </a>
  );
};

export default ButtonLink;
