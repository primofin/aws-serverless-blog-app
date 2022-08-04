import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../redux/store';
import CustomEditor from '../components/CustomEditor';
import { addNewPost } from '../redux/slices/postSlice';
import AppLogo from '../assets/app_logo.png';
import Button from '../components/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

interface Values {
  title: string;
  content: string;
  coverImgLink: string;
}

const PostFactory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const { posts } = useSelector((state: RootState) => state.post);

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      coverImgLink: '',
    },
    onSubmit: async (values: Values) => {
      if (!user) return;
      await dispatch(addNewPost({ ...values, userPostsId: user.id }));
      if (posts) {
        navigate('/');
      }
    },
  });

  const handleEditorChange = (content: string) => {
    formik.handleChange(content);
    formik.values.content = content;
  };

  return (
    <div className="post-factory">
      <div className="header">
        <header>
          <nav>
            <a href="/">
              <img src={AppLogo} className="rounded"></img>
            </a>
          </nav>
        </header>
      </div>
      <div className="post-factory__content-wrapper flex-center">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowBackIcon></ArrowBackIcon>
        </button>
        <form onSubmit={formik.handleSubmit} className="create-post-form">
          <div className="post-input">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>
          <div className="post-input">
            <label htmlFor="coverImgLink">Cover Image Link</label>
            <input
              id="coverImgLink"
              name="coverImgLink"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.coverImgLink}
            />
          </div>
          <Button type="submit" text="Submit"></Button>
        </form>
        <CustomEditor handleContentChange={handleEditorChange} />
      </div>
    </div>
  );
};

export default PostFactory;
