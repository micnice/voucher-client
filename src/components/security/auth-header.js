export function authHeader() {
    // return authorization header with jwt token
    let token = JSON.parse(localStorage.getItem('token'));

    if (token) {
        return { 'Authorization': 'Bearer ' + token };
    } else {
        return {};
    }
}



    // let token = localStorage.getItem("token");
    // axios.get(REST_BASE_URL+'/api/user', { headers: {"Authorization" : `Bearer ${token}`} })
    //        .then(res => {

    //            console.log("Current user====>"+res.data)
    //    this.setState({user :res.data})});

   
