import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { stateToHTML } from 'draft-js-export-html';
import { convertFromRaw } from 'draft-js';
import parse from 'html-react-parser';

import Header from '../components/Header';
import RightSidebar from '../layout/RightSidebar';
import LeftSidebar from '../layout/LeftSidebar';
import { getPostById } from '../redux/slices/postSlice';

function SinglePost() {
  const { postId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { selectedPost } = useSelector((state: RootState) => state.post);
  console.log('postId', postId);
  console.log('selectedPost', selectedPost);

  const getContent = () => {
    if (!selectedPost) return '';
    const { content } = selectedPost;
    const htmlContent = content ? parse(stateToHTML(convertFromRaw(JSON.parse(content)))) : 'Empty';
    return htmlContent;
  };

  useEffect(() => {
    if (postId) {
      dispatch(getPostById(postId));
    }
  }, []);
  return (
    <>
      {selectedPost && (
        <div>
          <Header hasSubHeading={false} />
          <div className="content-wrapper single-post__content">
            <LeftSidebar></LeftSidebar>
            <div>
              <h3>{selectedPost.title}</h3>
              {getContent()}
            </div>
            <RightSidebar></RightSidebar>
          </div>
        </div>
      )}
    </>
  );
}

export default SinglePost;
