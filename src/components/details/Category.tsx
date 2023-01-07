const Category: React.FC<{ name: string; index: number }> = ({
  name,
  index,
}) => {
  return (
    <li key={index} className="px-4 py-2 bg-primary text-white rounded-2xl mr-2">
      {name}
    </li>
  );
};

export default Category;
