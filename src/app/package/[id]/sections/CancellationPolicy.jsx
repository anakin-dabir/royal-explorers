import Border from "./Border";

export default function CancellationPolicy({ tour }) {
  return !tour.cancellationPolicy ? null : (
    <>
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Cancellation Policy</p>
        <ul className="text-gray-600">
          {tour?.cancellationPolicy.map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-blue-600">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <Border />
    </>
  );
}
