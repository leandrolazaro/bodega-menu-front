export const AppInfo = {
    AppName: "vuejs-webapp-sample",
    AppDeveloper: "ybkuroki",
    GithubLink: "https://github.com/ybkuroki/vuejs-webapp-sample"
  };
  
  const api = "http://localhost:8888"
  const apiAuthBase = api + "/auth"
  
  export const apiAuth = {
    LoginStatus: apiAuthBase + "/loginStatus",
    LoginAccount: apiAuthBase + "/loginAccount",
    Login: apiAuthBase + "/login",
    Logout: apiAuthBase + "/logout"
  }


  export const apiCategory = {
    getCategories: api + "/categories",
    setCategory: api + "/category/create",
  }