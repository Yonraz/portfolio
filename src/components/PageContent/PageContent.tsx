interface PageContentProps {
  children?: React.ReactElement;
}

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <div className="hero lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-[22rem] bg-none h-auto">
      <div className="hero-content">
        <div className="max-w-2xl">{children}</div>
      </div>
    </div>
  );
};

export default PageContent;
