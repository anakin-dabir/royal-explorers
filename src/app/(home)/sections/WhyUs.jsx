import { Calendar, DollarSign, Users } from "lucide-react";

export default function WhyUs() {
  return (
    <div className="bg-blue-500 text-white flex">
      <div className="container mx-auto px-4 max-w-7xl py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="flex items-center space-x-4">
            <div className="text-xl font-medium">Why Book With Us?</div>
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
