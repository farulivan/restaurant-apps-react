const Menu: React.FC<{ name: string; index: number }> = ({
  name,
  index,
}) => {
  return (
    <li className="list-inside list-disc" key={index}>{name}</li>
  );
};

export default Menu;
