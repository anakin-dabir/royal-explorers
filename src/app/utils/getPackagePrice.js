export function getPackagePrice(tour) {
  return `₹ ${tour?.packageCost?.standard?.["2Pax"] || tour?.packageCost?.deluxe?.totalCost || tour?.packageCost?.standardCategory?.dualRider}`;
}
