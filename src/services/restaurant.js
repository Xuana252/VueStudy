import axios from "axios";

export async function getRestaurants() {
  try {
    const response = await axios.get("http://localhost:3000/restaurant");
    return {
      success: true,
      message: "restaurant fetched",
      data: response.data,
    };
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return {
      success: false,
      message: "Error fetching restaurants",
      data: [],
    };
  }
}

export async function getRestaurantById(id) {
  try {
    const response = await axios.get(`http://localhost:3000/restaurant/${id}`);
    return {
      success: true,
      message: "Restaurant fetched successfully",
      data: response.data, 
    };
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return {
      success: false,
      message: "Error fetching restaurants",
      data: null,
    };
  }
}
export async function addRestaurant(restaurant) {
  try {
    const response = await axios.post(
      "http://localhost:3000/restaurant",
      restaurant,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return {
      success: true,
      message: "Restaurant added successfully",
      data: response.data,
    };
  } catch (error) {
    console.error("Error adding restaurant:", error);
    return {
      success: false,
      message: "Error adding restaurant",
      data: null,
    };
  }
}

export async function updateRestaurant(restaurant) {
  try {
    const response = await axios.put(
      `http://localhost:3000/restaurant/${restaurant.id}`,
      restaurant,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return {
      success: true,
      message: "Restaurant updated successfully",
      data: response.data,
    };
  } catch (error) {
    console.error("Error updating restaurant:", error);
    return {
      success: false,
      message: "Error updating restaurant",
      data: null,
    };
  }
}

export async function deleteRestaurant(id) {
  try {
    const response = await axios.delete(`http://localhost:3000/restaurant/${id}`);
    return {
      success: true,
      message: "Restaurant deleted successfully ",
      data: response.data,
    };
  } catch (error) {
    console.error("Error deleting restaurant:", error);
    return {
      success: false,
      message: "Error deleting restaurant",
      data: null,
    };
  }
}