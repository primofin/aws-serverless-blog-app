import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

import AppLogo from '../assets/app_logo.png';
import { signOut } from '../redux/slices/authSlice';
import { AppDispatch, RootState } from '../redux/store';
import ButtonLink from './ButtonLink';

type HeaderProps = {
  hasSubHeading?: boolean;
};

const Header = ({ hasSubHeading = true }: HeaderProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isLoading } = useSelector((state: RootState) => state.auth);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOutBtnClick = () => {
    dispatch(signOut());
    isLoading && window.location.reload();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const className = 'inverted';
  const scrollTrigger = 148;

  window.onscroll = function () {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
      document.getElementsByTagName('header')[0].classList.add(className);
    } else {
      document.getElementsByTagName('header')[0].classList.remove(className);
    }
  };

  const renderAuthButtons = () => {
    if (user) {
      const imgSrc = user.picture ?? 'https://via.placeholder.com/40.png/';
      return (
        <>
          <button aria-describedby={id} onClick={handleClick} className="rounded-button">
            <span>
              <img src={imgSrc} alt="cover image" className="rounded"></img>
            </span>
          </button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <div className="header__popover">
              <Link to={user.username}>{user.username}</Link>
              <Link to="new">Create Post</Link>
              <Button variant="text" onClick={handleSignOutBtnClick}>
                Sign out
              </Button>
            </div>
          </Popover>
        </>
      );
    }
    return (
      <ul>
        <li>
          <Link to="authentication-test">Log in</Link>
        </li>
        <li>
          <ButtonLink link="authentication-test" text="Create account"></ButtonLink>
        </li>
      </ul>
    );
  };

  return (
    <div className="header">
      <header>
        <nav>
          <a href="/">
            <img src={AppLogo} className="rounded"></img>
          </a>
          {renderAuthButtons()}
        </nav>
      </header>
      <main>
        {hasSubHeading && (
          <section className="jumbotron">
            <h1>A space for primos </h1>
          </section>
        )}
      </main>
    </div>
  );
};

export default Header;
