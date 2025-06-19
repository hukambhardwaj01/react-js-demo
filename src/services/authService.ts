




// src/services/authService.ts
const AuthenticationService = {
  async getAccessToken(): Promise<string | null> {
    return localStorage.getItem("token");
  },
  async refreshTokens(): Promise<void> {
    const newToken = "new-fake-token-1234";
    localStorage.setItem("token", newToken);
  },
};





export default AuthenticationService;
