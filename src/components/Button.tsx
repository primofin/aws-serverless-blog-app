type ButtonProps = {
  text: string;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
};
const Button = ({ text, variant = 'primary', type = 'button' }: ButtonProps) => {
  return (
    <button type={type} className={`button button__${variant}`}>
      {text}
    </button>
  );
};

export default Button;
