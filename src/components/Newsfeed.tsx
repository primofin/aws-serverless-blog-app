import Article from './Article';

const Newsfeed = () => {
  return (
    <div className="news-feed">
      {[1, 2, 3, 4].map((key) => (
        <Article key={key}></Article>
      ))}
    </div>
  );
};

export default Newsfeed;
