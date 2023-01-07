const Menu: React.FC<{ name: string }> = ({
  name,
}) => {
  return (
    <li className="list-inside list-disc">{name}</li>
  );
};

export default Menu;
