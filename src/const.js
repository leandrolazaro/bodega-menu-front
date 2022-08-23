export const AppInfo = {
    AppName: "bodega-menu-front",
    AppDeveloper: "ybkuroki",
    GithubLink: "https://github.com/leandrolazaro/bodega-menu-front.git"
  };
  
  // const api = "https://bodegalojadevinhos.com.br/menu-rest-api/public/index.php"
  const api = "http://localhost:8888"
  const apiAuthBase = api + "/auth"
  const apiAdminBase = api + "/admin"
  const apiMenuBase = api + "/menu"
  
  export const apiAuth = {
    LoginStatus: apiAuthBase + "/loginStatus",
    LoginAccount: apiAuthBase + "/loginAccount",
    Login: apiAuthBase + "/login",
    Logout: apiAuthBase + "/logout"
  }


  export const apiCategory = {
    getCategories: apiAdminBase+ "/categories",
    setCategory: apiAdminBase+ "/category/create",
    delCategory: apiAdminBase+ "/category/delete",
    editCategory: apiAdminBase+ "/category/edit"
  }

  export const apiItem = {
    setItem: apiAdminBase+ "/category/item/create",
    getItens: apiAdminBase+ "/category/item/search",
    delItem: apiAdminBase+ "/category/item/delete",
    editItem: apiAdminBase+ "/category/item/edit",
  }

  export const apiMenu={
    getItens: apiMenuBase+ "/itens",
    getCategories: apiMenuBase+ "/categories",
  }

  export const apiWineCategories={
    getWineTypes: apiAdminBase+ "/wine/types",
    getWineGrapes: apiAdminBase+ "/wine/grapes",
    getWineCountries: apiAdminBase+ "/wine/countries",
  }

  export const apiWine={
    setWine: apiAdminBase+ "/wine/create",
    getWineGrapes: apiAdminBase+ "/wine/grapes",
    getWineCountries: apiAdminBase+ "/wine/countries",
  }