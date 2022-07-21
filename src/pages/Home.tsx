import Header from '../components/Header';
import Newsfeed from '../components/Newsfeed';
import RightSidebar from '../layout/RightSidebar';
import LeftSidebar from '../layout/LeftSidebar';

function Home() {
  return (
    <div>
      <Header />
      <div className="home-content">
        <LeftSidebar></LeftSidebar>
        <Newsfeed></Newsfeed>
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}

export default Home;
