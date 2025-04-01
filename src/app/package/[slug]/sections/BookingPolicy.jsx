export default function BookingPolicy({ tour }) {
  return !tour?.bookingPolicy ? null : (
    <div className="flex flex-col gap-2">
      <p className="font-semibold">Booking Policy</p>
      <ul className="text-gray-600">
        {tour?.bookingPolicy.map((item, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span className="text-blue-600">●</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
