import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../redux/store';
import Button from './Button';
import HeadingLink from './HeadingLink';

type ArticleProps = {
  // imgSrc: string;
  title: string;
  postId: string;
};

const Article = ({ title, postId }: ArticleProps) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const url = '/' + user?.username + '/' + postId;
  return (
    <div className="article">
      <div className="article__cover">
        <Link to={url}>
          <img src="https://via.placeholder.com/300.png/" alt="cover image"></img>
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
