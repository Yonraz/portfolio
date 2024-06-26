import "./floatingGlass.css";

const FloatingGlass: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className={`float`}></div>
      <div className={`float-2`}></div>
    </div>
  );
};

export default FloatingGlass;
