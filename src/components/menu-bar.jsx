const MenuBar = () => {
  const category = JSON.parse(localStorage.getItem("category"));
  console.log(category);
  return (
    <div>
      <ul>
        {category.map((item) => (
          <li   key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBar;
