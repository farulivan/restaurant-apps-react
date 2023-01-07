const Category: React.FC<{ name: string }> = ({
  name,
}) => {
  return (
    <li className="px-4 py-2 bg-primary text-white rounded-2xl mr-2">
      {name}
    </li>
  );
};

export default Category;
