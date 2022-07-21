type HeadingLink = {
  text: string;
  link: string;
};

const HeadingLink = ({ text, link }: HeadingLink) => {
  return (
    <a href={link} className="heading-link">
      {text}
    </a>
  );
};

export default HeadingLink;
