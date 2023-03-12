import axios from "axios";
const api = axios.create({
    //baseURL: "http://192.168.0.120:80/sempre-condominio/index.php",
    baseURL: "https://srvdsv2.axmsolucoes.com.br/scriptcase9/app/GOL/includes/servicos/condominio/api-sindico/index.php",
 })

export {api};
