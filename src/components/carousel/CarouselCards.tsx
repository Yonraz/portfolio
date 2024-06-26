import { motion } from "framer-motion";
import { CarouselItem } from "./types";
import TechCard from "../techCard/TechCard";

interface CarouselItemsProps {
  items: CarouselItem[];
  index: number;
}

const CarouselItems: React.FC<CarouselItemsProps> = ({ items, index }) => {
  return (
    <div className="flex items-center">
      {items.map((item, i) => (
        <motion.div
          className="md:w-1/6 w-1/3 h-full py-0 px-0 shrink-0 rounded-lg bg-none "
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{ scale: index === i ? 0.8 : 0.7 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 50,
            mass: 6,
          }}
          key={i}
          onPan={() => {}}
        >
          <TechCard name={item.name} url={item.url} />
        </motion.div>
      ))}
    </div>
  );
};
export default CarouselItems;
