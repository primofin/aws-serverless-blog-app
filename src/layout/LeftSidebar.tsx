import HomeIcon from '@mui/icons-material/Home';

const LeftSidebar = () => {
  return (
    <nav className="left-nav">
      <ul>
        {[1, 2, 3, 4].map((key) => (
          <li className="left-nav__item" key={key}>
            <a href="/">
              <HomeIcon />
              Home
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LeftSidebar;
