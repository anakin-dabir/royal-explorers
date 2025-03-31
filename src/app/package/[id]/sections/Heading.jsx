export default function Heading({ tour }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-full bg-black/60 text-white">
      <div className="flex mt-[114] flex-col h-full justify-center container mx-auto max-w-7xl p-4 gap-3">
        <div className="text-5xl font-bold">{tour?.name}</div>
        {/* <div className="flex items-center space-x-2 text-gray-800">
        <div className="flex gap-1 text-yellow-500">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
          <Star className="w-5 h-5 text-gray-300" />
        </div>
        <span className="text-white text-sm">(6 Reviews)</span>
      </div> */}
      </div>
    </div>
  );
}
