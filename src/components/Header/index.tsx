import './header.scss';

const Header = () => {
  return (
    <div>
      <a href="/">Primo</a>
      <input type="text" placeholder="Search.." name="search"></input>
      <div>
        <button>Create Post</button>
        <button>Notification</button>
        <a href="/">User profile</a>
      </div>
    </div>
  );
};

export default Header;
