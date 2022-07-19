const Article = () => {
  return (
    <div className="article">
      <div className="article__cover">
        <a href="/">
          <img src="https://via.placeholder.com/300.png/" alt="cover image"></img>
        </a>
      </div>
      <div className="article__body">
        <div className="blog-card__top"></div>
        <h4>How to store and update arrays in React useState hook</h4>
        <div className="tags">
          <a href="/">
            <span>#</span> react
          </a>
        </div>
      </div>
    </div>
  );
};

export default Article;
