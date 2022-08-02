import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../common/types';
import { getAllPosts } from '../redux/slices/postSlice';
import { AppDispatch, RootState } from '../redux/store';

import Article from './Article';

const Newsfeed = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <div className="news-feed">
      {posts.length !== 0 &&
        posts.map(({ id, title, author }: Post) => {
          if (!author) return <Article key={id} title={title} postId={id}></Article>;
          return <Article key={id} title={title} postId={id} author={author.username}></Article>;
        })}
    </div>
  );
};

export default Newsfeed;
