import HomeIcon from '@mui/icons-material/Home';
import SellIcon from '@mui/icons-material/Sell';
import CodeIcon from '@mui/icons-material/Code';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

const LeftSidebar = () => {
  return (
    <nav className="left-nav">
      <ul>
        <li className="left-nav__item">
          <a href="/">
            <HomeIcon />
            Home
          </a>
        </li>
        <li className="left-nav__item">
          <a href="/">
            <SellIcon />
            Tag
          </a>
        </li>
        <li className="left-nav__item">
          <a href="/">
            <CodeIcon />
            About
          </a>
        </li>
        <li className="left-nav__item">
          <a href="/">
            <AccessibilityIcon />
            Guides
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default LeftSidebar;
