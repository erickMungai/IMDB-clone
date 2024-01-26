import axios from "axios";

export default axios.create({
     //baseURL:'https://2949-136-34-200-3.ngrok-free.app',
     baseURL:'http://localhost:8080',
    
     headers:{"ngrok-skip-browser-warning": "true"}
    
});

