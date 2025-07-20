import axios from "axios";

export async function signIn(user) {
  try {
    const response = await axios.get(
      "http://localhost:3000/user",
      {
        params: {
          email: user.email,
          password: user.password
        }
      }
    );
    const data = response.data;
    if (data.length > 0) {
      localStorage.setItem("user", JSON.stringify(data[0]));
      return { success: true, message: "You are signed in!", data: data[0] };
    } else {
      return { success: false, message: "Account not found", data: null };
    }
  } catch (error) {
    console.error("Sign-in error:", error);
    return { success: false, message: "Error", data: null };
  }
}

export async function signUp(user) {
  try {
    const response = await axios.post("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      const data = response.data;
      localStorage.setItem("user", JSON.stringify(data));
      return { success: true, message: "You are signed up!", data: data };
    } else {
      return { success: false, message: "Sign-up failed", data: null };
    }
  } catch (error) {
    console.error("Sign-up error:", error);
    return { success: false, message: "Error", data: null };
  }
}
