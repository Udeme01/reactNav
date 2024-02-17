const List = () => {
  const styles = {
    className:
      "text-red-600 block px-2 py-1 hover:underline hover:text-gray-900 text-slate-600 text-sm py-4 pl-2 w-100% text-left cursor-pointer border-b border-slate-300",
  };

  const navLinks = [
    {
      className: styles.className,
      name: "Home",
    },
    {
      className: styles.className,
      name: "Account",
    },
    {
      className: styles.className,
      name: "Project",
    },
    {
      className: styles.className,
      name: "About",
    },
    {
      className: styles.className,
      name: "Contact",
    },
  ];
  return (
    <>
      {navLinks.map((link, index) => (
        <li key={index} className={link.className}>
          {link.name}
        </li>
      ))}
    </>
  );
};

export default List;
