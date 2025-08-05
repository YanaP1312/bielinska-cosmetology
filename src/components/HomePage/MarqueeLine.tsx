export default function MarqueeLine({ text, reverse = false }: { text: string; reverse?: boolean }) {
    const segments = text.split('•');
  
    return (
      <div
        className="flex animate-marquee whitespace-nowrap "
        style={{ animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-6 mx-6">
            {segments.map((segment, index) => (
              <span key={index} className="inline-flex items-center">
                {segment.trim()}
               
                  <span className="ml-7">•</span>
              
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  }
  