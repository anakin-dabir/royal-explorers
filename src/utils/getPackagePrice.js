export function getPackagePrice(tour) {
  return `₹ ${tour?.packageCost?.standard?.["2Pax"] || tour?.packageCost?.deluxe?.["Total Cost"] || tour?.packageCost?.["Standard Category"]?.["Dual Rider"]}`;
}
