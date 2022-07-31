import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import RightSidebar from '../layout/RightSidebar';
import LeftSidebar from '../layout/LeftSidebar';

function SinglePost() {
  const { username, postId } = useParams();
  console.log('username', username);
  console.log('postId', postId);

  return (
    <div>
      <Header />
      <div className="home-content">
        <LeftSidebar></LeftSidebar>
        <div>aa</div>
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}

export default SinglePost;
