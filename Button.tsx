interface ButtonProps {
   label: string;
   onClick?: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
   return (
      <button
         onClick={onClick}
         className="py-1 px-2 sm:py-1 sm:px-5 mb-2 sm:mb-6 text-xs   md:text-lg font-bold border border-1 border-primary-dark text-white rounded-md bg-primary-dark hover:bg-secondary-light hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
         {label}
      </button>
   );
};

export default Button;
