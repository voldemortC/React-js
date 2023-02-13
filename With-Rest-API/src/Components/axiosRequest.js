import axios from 'axios';

const axiosPost = (endpoint, formData) => {
    return new Promise((resolve, reject)=> {
        axios.post(endpoint, formData).then((res)=>{
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    })  
}
export default axiosPost;