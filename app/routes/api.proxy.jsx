import { calculatePrice } from "../services/pricingEngine";

export async function loader({ request }) {

  const url = new URL(request.url);

  const zipCode = url.searchParams.get("zip");

  const calculatedPrice = calculatePrice(zipCode);

  return Response.json({
    success: true,
    zipCode,
    calculatedPrice,
  });
}