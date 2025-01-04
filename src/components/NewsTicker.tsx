import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  url: string;
}

export const NewsTicker = () => {
  const [news, setNews] = useState<NewsItem[]>([
    { id: 1, title: "UAE Introduces New AI Regulations for Financial Sector", url: "https://www.khaleejtimes.com" },
    { id: 2, title: "UK Financial Markets Embrace Blockchain Technology", url: "https://www.ft.com" },
    { id: 3, title: "Digital Transformation in UAE Banking Sector", url: "https://gulfnews.com" },
  ]);

  return (
    <div className="bg-gradient-to-r from-primary/10 to-blue-400/10 p-4 rounded-lg">
      <div className="overflow-hidden relative">
        <div className="animate-[slide_20s_linear_infinite] whitespace-nowrap flex gap-8">
          {news.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-blue-600 transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};