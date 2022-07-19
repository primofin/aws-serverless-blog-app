import Article from './Article';

const Newsfeed = () => {
  return (
    <div className="news-feed">
      {[1, 2, 3, 4].map((item) => (
        <Article key={item}></Article>
      ))}
    </div>
  );
};

export default Newsfeed;
