type HeaderStyleDropdownProps = {
  onToggle: (event: string) => void;
  active: string;
  headerOptions: {
    label: string;
    style: string;
  }[];
};

const HeaderStyleDropdown = ({
  onToggle: onToggleFn,
  active,
  headerOptions,
}: HeaderStyleDropdownProps) => {
  const onToggle = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onToggleFn(value);
  };
  return (
    <select value={active} onChange={onToggle}>
      <option value="">Header Levels</option>
      {headerOptions.map((heading, index) => {
        return (
          <option key={index} value={heading.style}>
            {heading.label}
          </option>
        );
      })}
    </select>
  );
};

export default HeaderStyleDropdown;
