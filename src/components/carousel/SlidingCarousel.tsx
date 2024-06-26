import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import CarouselItems from "./CarouselCards";
import { CarouselItem } from "./types";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

const DRAG_BUFFER = 50;

interface CarouselProps {
  items: CarouselItem[];
}

const SlidingCarousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const getLength = () => {
    if (window.innerWidth < 768) {
      return items.length / 3;
    }
    return items.length / 6;
  };

  const dragX = useMotionValue(0);
  const moveForward = () => {
    setCurrentImageIndex((prev) => (prev + 1) % getLength());
  };
  const moveBackward = () => {
    setCurrentImageIndex((prev) => (prev - 1 + items.length) % getLength());
  };

  const onDragStart = () => {
    setDragging(true);
  };
  const onDragEnd = () => {
    setDragging(false);

    const dragDistance = dragX.get();
    if (dragDistance <= -DRAG_BUFFER) {
      moveForward();
    } else if (dragDistance >= DRAG_BUFFER) {
      moveBackward();
    }
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className="bg-none w-full h-auto px-0 shrink-0 overflow-hidden m-0">
        <motion.div
          className="cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          animate={{ translateX: `-${currentImageIndex * 100}%` }}
          style={{ x: dragX }}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        >
          <CarouselItems items={items} index={currentImageIndex} />
        </motion.div>
      </div>
      <div className="w-1/4 flex justify-between">
        <button className="chevron" onClick={moveBackward}>
          <BiChevronLeftCircle size={30}/>
        </button>
        <button onClick={moveForward}>
          <BiChevronRightCircle size={30} />
        </button>
      </div>
    </div>
  );
};

export default SlidingCarousel;
