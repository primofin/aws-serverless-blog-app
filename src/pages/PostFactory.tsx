import { Formik, Field, Form, FormikHelpers } from 'formik';
import CustomEditor from '../components/CustomEditor';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const PostFactory = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="John" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="john@acme.com" type="email" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <CustomEditor />
    </div>
  );
};

export default PostFactory;
