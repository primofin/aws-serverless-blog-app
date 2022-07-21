type Button = {
  text: string;
  type?: 'primary' | 'secondary';
};
const Button = ({ text, type = 'primary' }: Button) => {
  return <button className={`button button__${type}`}>{text}</button>;
};

export default Button;
