import { Bed, Clock, Utensils } from "lucide-react";

export default function Duration({ tour }) {
  return !tour?.duration && !tour?.mealPlan && !tour?.accommodation ? null : (
    <section className="bg-gray-100">
      <div className="grid grid-cols-2 gap-6 text-gray-800 container mx-auto max-w-7xl px-4 py-10">
        {!tour?.duration ? null : (
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>{tour?.duration}</span>
          </div>
        )}

        {!tour?.mealPlan ? null : (
          <div className="flex items-center space-x-2">
            <Utensils className="w-5 h-5 text-blue-600" />
            <span>Meal Plan: {tour?.mealPlan}</span>
          </div>
        )}
        {!tour?.accommodation ? null : (
          <div className="flex items-center space-x-2">
            <Bed className="w-5 h-5 text-blue-600" />
            <span>Accommodation: {tour?.accommodation}</span>
          </div>
        )}
      </div>
    </section>
  );
}
