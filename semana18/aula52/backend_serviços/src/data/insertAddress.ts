import {connection} from '../index'
import {userAddress} from '../types/userAddress'

export const insertAddress = async (newAddress: userAddress) => {
    try {
      await connection(('Users_Address'))
        .insert(newAddress)
    } catch (error) {
      throw new Error(error.message);
    }
  }