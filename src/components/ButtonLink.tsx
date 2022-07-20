type ButtonLink = {
  text: string;
  link: string;
};
const ButtonLink = ({ text, link }: ButtonLink) => {
  return (
    <a className="button-link" href={link}>
      {text}
    </a>
  );
};

export default ButtonLink;
