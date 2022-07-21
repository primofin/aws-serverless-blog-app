import Button from './Button';
import HeadingLink from './HeadingLink';

// type ArticleProps = {
//   imgSrc: string;
//   link: string;
// }

const Article = () => {
  return (
    <div className="article">
      <div className="article__cover">
        <a href="/">
          <img src="https://via.placeholder.com/300.png/" alt="cover image"></img>
        </a>
      </div>
      <div className="article__body">
        <div className="article__top"></div>
        <HeadingLink
          link="#"
          text="How to store and update arrays in React useState hook"
        ></HeadingLink>
        <div className="tags">
          <a href="/">
            <span>#</span> react
          </a>
        </div>
        <div className="article__bottom">
          <div className="article__save">
            <Button text="Save"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
