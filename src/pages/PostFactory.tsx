import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../redux/store';

import CustomEditor from '../components/CustomEditor';
import { addNewPost } from '../redux/slices/postSlice';

interface Values {
  title: string;
  content: string;
}

const PostFactory = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
    },
    onSubmit: (values: Values) => {
      if (!user) return;
      dispatch(addNewPost({ ...values, userPostsId: user.id }));
    },
  });

  const handleEditorChange = (content: string) => {
    formik.handleChange(content);
    formik.values.content = content;
  };
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <button type="submit">Submit</button>
      </form>
      <CustomEditor handleContentChange={handleEditorChange} />
    </div>
  );
};

export default PostFactory;
