import { httpClient } from "../../../lib/axios";
const BASE_URL = "/categories";
export const CategoryServices = {
  getAll: async (restaurantId = 8) => {
    const res = await httpClient.get(
      `${BASE_URL}?with_products=1&restaurant_admin_id=${restaurantId}&sort_term=desc&sort_by=name`
    );
    return res.data.data;
  },
};
