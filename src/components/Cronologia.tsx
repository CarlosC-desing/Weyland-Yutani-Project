import { useState, useEffect } from "react";
import AOS from "aos";
import { timelineDatabase } from "../data/timeline";
import { CronologiaCard } from "./CronologiaCards";

export const Cronologias = () => {
  const [activeYear, setActiveYear] = useState(timelineDatabase[0].year);

  useEffect(() => {
    const refreshAOS = setTimeout(() => {
      AOS.refresh();
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const year = entry.target.getAttribute("data-year");
            if (year) setActiveYear(year);
          }
        });
      },
      { threshold: 0.5 },
    );

    const cards = document.querySelectorAll(".timeline-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
      clearTimeout(refreshAOS);
    };
  }, []);

  return (
    <div className="flex bg-black min-h-screen relative py-20 overflow-x-clip">
      <aside className="hidden md:flex flex-col items-center w-24 mr-10 relative">
        <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-center">
          <span className="text-[10px] font-mono text-green-900 uppercase tracking-widest mb-2">
            Timeline_Point
          </span>
          <div className="h-20 w-0.5 bg-linear-to-b from-transparent via-lime-400 to-transparent animate-pulse" />
          <div className="my-4 transform -rotate-90">
            <h2 className="text-4xl font-fauna-one text-lime-400 drop-shadow-[0_0_10px_rgba(163,230,53,0.5)] whitespace-nowrap">
              {activeYear}
            </h2>
          </div>
          <div className="h-20 w-0.5 bg-linear-to-b from-transparent via-lime-400 to-transparent animate-pulse" />
        </div>
      </aside>

      <main className="flex-1 max-w-5xl w-full">
        <header className="mb-16 border-b border-green-900/30 pb-6">
          <h1 className="text-sm font-mono text-green-700 uppercase tracking-[0.5em]">
            Historical_Records // Sequence_01
          </h1>
        </header>

        <div className="flex flex-col w-full">
          {timelineDatabase.map((movie) => (
            <div
              key={movie.id}
              className="timeline-card w-full"
              data-year={movie.year}
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              onMouseEnter={() => setActiveYear(movie.year)}
            >
              <CronologiaCard timeline={movie} />
            </div>
          ))}
        </div>
      </main>

      <aside className="hidden lg:block w-32 ml-10 opacity-20 pointer-events-none">
        <div className="sticky top-20 font-mono text-[8px] text-green-500 leading-tight">
          {Array.from({ length: 40 }).map((_, i) => (
            <p key={i}>{Math.random().toString(2).substring(2, 15)}</p>
          ))}
        </div>
      </aside>
    </div>
  );
};
