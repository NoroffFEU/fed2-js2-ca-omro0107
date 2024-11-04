export async function logout() {
  try {
    /** Clear the token from local storage */
    localStorage.removeItem('accessToken', data.token);

    /** Redirect the user to the login page */
    window.location.href = "/auth/login/";
  } catch (error) {
    console.error(error);
  }
}