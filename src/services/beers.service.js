import axios from 'axios';

export default class BeerService{
    constructor(){
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
            withCredentials: false
        })
    }

    create = data => this.instance.post("/new", data);
    get = () => this.instance.get("/");
    getOne = id => this.instance.get(`/${id}`);
    deleteOne = id => this.instance.delete(`/${id}`);
    updateOne = (id, data) => this.instance.put(`/${id}`, data);
  
}