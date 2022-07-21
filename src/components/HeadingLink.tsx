type HeadingLinkProps = {
  text: string;
  link: string;
};

const HeadingLink = ({ text, link }: HeadingLinkProps) => {
  return (
    <a href={link} className="heading-link">
      {text}
    </a>
  );
};

export default HeadingLink;
