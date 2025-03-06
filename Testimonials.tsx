// Import testimonial images
import test1 from "../../assets/home/test1.jpg";
import test2 from "../../assets/home/test2.jpg";
import test3 from "../../assets/home/test4.png";

// Define types for testimonials
type Testimonial = {
  id: string;
  imgUrl: string;
  name: string;
  description: string;
};

// Testimonials array
const testimonials: Testimonial[] = [
  {
    id: "test1",
    imgUrl: test1,
    name: "Shink Mink",
    description: "This is a fantastic service! Highly recommend to everyone.",
  },
  {
    id: "test2",
    imgUrl: test2,
    name: "Jay Cutler",
    description: "Amazing experience! Will definitely use it again.",
  },
  {
    id: "test3",
    imgUrl: test3,
    name: "Bob",
    description: "A game changer! I can't believe how easy it was.",
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto py-8 md:py-12 lg:py-16">
      <h2 className="text-secondary-dark font-bold text-center mb-8 text-3xl md:text-4xl lg:text-5xl">
        TESTIMONIALS
      </h2>
      <div className="flex flex-wrap justify-around md:justify-center lg:justify-around gap-4 px-3 md:px-16">
        {testimonials.map(({ id, imgUrl, name, description }) => (
          <div
            key={id}
            className="bg-tertiary-light w-full md:w-1/2 lg:w-1/3 xl:w-1/4 py-8 px-6 rounded-lg flex flex-col gap-6 items-center text-center mb-8 md:mb-12 lg:mb-16"
          >
            <img src={imgUrl} alt={name} className="w-48 h-48 rounded-lg" />
            <h3 className="font-bold text-2xl text-secondary-light">{name}</h3>
            <p className="text-lg text-secondary-light">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
