
type MediaWrapperProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  export default function MediaWrapper({ children, className = "" }: MediaWrapperProps) {
    return (
      <div className={`w-full overflow-hidden border border-primary rounded-xl h-[419px] md:h-[311px] lg:h-[534px] ${className}`}>
        {children}
      </div>
    );
  }
  