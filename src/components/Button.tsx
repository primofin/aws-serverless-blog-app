type ButtonProps = {
  text: string;
  type?: 'primary' | 'secondary';
};
const Button = ({ text, type = 'primary' }: ButtonProps) => {
  return <button className={`button button__${type}`}>{text}</button>;
};

export default Button;
