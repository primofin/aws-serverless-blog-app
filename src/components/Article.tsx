import { Link } from 'react-router-dom';

import Button from './Button';
import HeadingLink from './HeadingLink';

type ArticleProps = {
  coverImgLink?: string;
  title: string;
  postId: string;
  author?: string;
};

const Article = ({ title, postId, author, coverImgLink }: ArticleProps) => {
  const url = '/' + author + '/' + postId;
  const imgSrc = coverImgLink || 'https://via.placeholder.com/300.png/';
  return (
    <div className="article" key={postId}>
      <div className="article__cover">
        <Link to={url}>
          <img src={imgSrc} alt="cover image"></img>
        </Link>
      </div>
      <div className="article__body">
        <div className="article__top"></div>
        <HeadingLink link={url} text={title || 'Default title'}></HeadingLink>
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
