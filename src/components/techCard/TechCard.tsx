interface TechCardProps {
  name: string;
  url: string;
}

const TechCard: React.FC<TechCardProps> = ({ name, url }) => {
  return (
    <div className="card card-compact bg-none w-32 flex items-center shadow-xl">
      <figure className="w-24">
        <img draggable={false} src={url} alt={`${name} icon`} />
      </figure>
      <div className="card-body flex w-fit justify-center">
        <p className="card-title text-center w-fit">{name}</p>
      </div>
    </div>
  );
};

export default TechCard;
