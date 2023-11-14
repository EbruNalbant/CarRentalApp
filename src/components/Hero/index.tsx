import { motion } from "framer-motion";
import CustomButton from "../CustomButton";

const Hero = () => {
  // todo!!!!!!
  const scrollTo = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">Feel the Freedom, Start the Journey!</h1>
        <p className="hero__subtitle text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quisquam
          inventore sit eius. Maiores quidem, obcaecati est numquam, cum eum
          minus molestiae ipsa voluptatem cupiditate iure, provident ullam quod.
          Aliquam!
        </p>
        <CustomButton
          title="Explore the Cars"
          designs="mt-10"
          handleClick={scrollTo}
        />
      </div>
      <div className="w-100 flex justify-center">
        <motion.img
          src="/hero.png"
          className="img-fluid object-contain"
          initial={{ translateX: 200, scale: 0.7 }}
          whileInView={{ translateX: 0, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default Hero;
