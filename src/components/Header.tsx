import AppLogo from '../assets/app_logo.png';

const Header = () => {
  const className = 'inverted';
  const scrollTrigger = 148;

  window.onscroll = function () {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
      document.getElementsByTagName('header')[0].classList.add(className);
    } else {
      document.getElementsByTagName('header')[0].classList.remove(className);
    }
  };
  return (
    <div>
      <header>
        <nav>
          <a href="/">
            <img src={AppLogo}></img>
          </a>
          <ul>
            <li>
              <a href="#">Log in</a>
            </li>
            <li>
              <a href="#">Create account</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="jumbotron">
          <h1>A space for primos </h1>
        </section>
      </main>
    </div>
  );
};

export default Header;
