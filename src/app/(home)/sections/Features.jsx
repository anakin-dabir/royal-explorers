import { Calendar, DollarSign, MapPin, Users } from "lucide-react";

export default function Features() {
  return (
    <div className="bg-blue-500 text-white py-10">
      <div className="container mx-auto p-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">500+ DESTINATIONS</h3>
              <p className="text-sm opacity-80">Morbi leo risus, porta ac</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <DollarSign size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">BEST PRICE GUARANTEE</h3>
              <p className="text-sm opacity-80">Morbi leo risus, porta ac</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <Users size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">GREAT CUSTOMER</h3>
              <p className="text-sm opacity-80">Morbi leo risus, porta ac</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <Calendar size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">SUPER FAST BOOKING</h3>
              <p className="text-sm opacity-80">Morbi leo risus, porta ac</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
