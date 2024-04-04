

export const NavItem = ({ text, href }) => {

  return (
    <a target="_blank" href={href}>
      <li>{text}</li>
    </a>
  );
};
