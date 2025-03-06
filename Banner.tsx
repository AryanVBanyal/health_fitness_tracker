import styles from "./Home.module.css";

const Banner = () => {
  return (
    <div className={`${styles.banner} flex items-center justify-end`}>
      <div className="px-4 sm:px-12 md:px-24">
        {" "}
        {/* Responsive padding */}
        <h4 className="text-secondary-light text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center sm:text-left">
          "Empower Your Body, Transform Your Life <br />
          Your Fitness Journey Starts Here."
        </h4>
        <button className="bg-secondary-light text-secondary-dark px-4 py-2 rounded-full font-bold block sm:float-end mx-auto sm:mx-0">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Banner;
