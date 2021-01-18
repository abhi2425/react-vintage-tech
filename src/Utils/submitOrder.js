import axios from 'axios'
import { authUrl as url } from './url'

export default async (products, token) => {
   const response = await axios({
      url: `${url}/tasks`,
      method: 'POST',
      headers: {
         'Access-Control-Allow-Origin': '*',
         Authorization: `Bearer ${token}`,
      },
      data: {
         orders: [
            {
               products,
            },
         ],
      },
   }).catch((error) => console.log(error.message))
   return response
}
