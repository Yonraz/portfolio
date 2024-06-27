interface GalleryProps {
  slides: string[];
  id: string;
}

const GalleryCarousel: React.FC<GalleryProps> = ({ slides, id }) => {
  const keepLocation = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    oldOffset: number
  ) => {
    console.log(oldOffset);
    if (oldOffset) {
      window.scroll(0, oldOffset);
    } else window.scroll(0, 0);
  };
  return (
    <div className="carousel w-full  max-h-72">
      {slides.map((url, i) => (
        <div
          key={url}
          id={`slide${id}${i}`}
          className="carousel-item relative w-full"
        >
          <img src={url} className="w-full  rounded-lg object-contain" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide${id}${(i - 1 + slides.length) % slides.length}`}
              onClick={(e) => keepLocation(e, window.scrollY)}
              className=" btn glass-bg"
            >
              ❮
            </a>
            <a
              href={`#slide${id}${(i + 1) % slides.length}`}
              onClick={(e) => keepLocation(e, window.scrollY)}
              className="btn glass-bg"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryCarousel;
