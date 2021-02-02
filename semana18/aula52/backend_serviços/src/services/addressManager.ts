import axios from 'axios'
import { address } from '../types/address';

const URL = "https://viacep.com.br/ws";

export default async function getAddressByCep(cep: string): Promise<address> {
    try {

        const result = await axios.get(`${URL}/${cep}/json`);

        const userAdress: address = {
            street: result.data.logradouro,
            neighborhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf
        }

        return userAdress;

    } catch(error){
        throw new Error(error.message)
    }
}