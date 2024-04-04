import "./button.css";

export const StdButton = ({ children }) => {
  return (
    <div className="std_btn">
      <button>{children}</button>
    </div>
  );
};
