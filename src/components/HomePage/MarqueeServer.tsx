
import { getTranslations } from 'next-intl/server';
import MarqueeLine from './MarqueeLine';

export default async function MarqueeServer() {
  const t = await getTranslations('common.home_page.marquee');
  const titles = t('titles');
  const items = t('items');




  return (
    <div className='overflow-hidden pb-14 md:pb-24 lg:pb-32'>
  
      <div className="rotate-[3deg] origin-left text-background bg-additional uppercase py-2 text-xl">
        <MarqueeLine text={titles} reverse={true}/>
        </div>
    
      <div className="rotate-[-4deg] origin-right bg-accent font-vibes p-2 text-xl">
      <MarqueeLine text={items}/>
      </div>
   
    </div>

   
  );
}

