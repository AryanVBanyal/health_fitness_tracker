
import styles from "./Banner.module.css";

const Banner = () => {
   return (
      <div
         className={`${styles.bannerSection} bg-cover flex justify-center items-center text-black text-center p-5`}
      >
         <div className="rounded-lg p-4 md:p-8 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-lg font-semibold">Fashion Sale</span>
            <h2 className="text-3xl md:text-4xl font-bold my-2">Minimal Menz Style</h2>
            <p className="text-base w-full md:w-1/2">
               Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
               voluptas iure, delectus dignissimos facilis neque nulla earum.
            </p>
            <button className="bg-purple-700 text-white rounded-md px-5 py-2 mt-4 hover:bg-purple-800 transition">
               Shop Now
            </button>
         </div>
      </div>
   );
};

export default Banner;