import axios from 'axios';
//const baseUrl = "http://localhost:4000";
const baseUrl = "https://polar-spire-21601.herokuapp.com";

class FrontEndController{

    static login(username,password){   
        return axios.post(baseUrl+"/users/login",{
            username,
            password
        }, { withCredentials:true })
    }

    static registration(username,password,confirmpassword,acno){
        return axios.post(baseUrl+"/users/register",{
            username,
            password,
            confirmpassword,
            acno
        })
    }

   

    static getStockDetails(StockName){
        console.log("In Function - getStockDetails")
        return axios.post(baseUrl+"/stocks/getStockDetails",{
            StockName,
        },{withCredentials:true })
    }

}

export default FrontEndController;