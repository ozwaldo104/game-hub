import axios from "axios";


export default axios.create({
   baseURL:'https://api.rawg.io/api',
   params: {
    key: 'd7fb36ba5136492db279e8a5f6973ce4'
   }

})