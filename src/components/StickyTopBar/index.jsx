"use client";

export default function StickyScrollBar() {
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const BUTTONS = [
    { name: "Detail", id: "detail" },
    { name: "Itinerary", id: "itinerary" },
    { name: "Photos", id: "photos" },
    { name: "Reviews", id: "reviews" },
  ];

  return (
    <section className="bg-gray-200 sticky scroll-mt-40 top-0 z-50 scroll-offset">
      <div className="flex items-center gap-5 md:gap-10 text-gray-500 container mx-auto max-w-7xl px-4 py-8">
        {BUTTONS.map((button, index) => {
          return (
            <button onClick={() => scrollToSection(button.id)} key={index} className="relative">
              {button.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}
