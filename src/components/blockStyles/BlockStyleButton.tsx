type BlockStyleButtonProps = {
  label: string;
  active: boolean;
  style: string;
  onToggle: (event: string) => void;
};

const BlockStyleButton = ({
  label,
  onToggle: onToggleFn,
  active,
  style,
}: BlockStyleButtonProps) => {
  const onToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onToggleFn(style);
  };
  let className = 'RichEditor-styleButton';
  if (active) {
    className += ' RichEditor-activeButton';
  }

  return (
    <span className={className} onClick={onToggle}>
      {label}
    </span>
  );
};

export default BlockStyleButton;
