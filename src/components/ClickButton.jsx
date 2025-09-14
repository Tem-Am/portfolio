

const ClickButton = ({ text, className, page }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(page);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${className}`}
    >
      <div className="absolute inset-0 bg-white opacity-20 pointer-events-none" />
      <p className="relative z-10">{text}</p>
    </button>
  );
};

export default ClickButton;