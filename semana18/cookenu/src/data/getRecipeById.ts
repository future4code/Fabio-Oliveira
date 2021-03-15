import {connection} from '../index'
import { Recipe } from '../types/recipe'

const userTableName = 'RecipeCookenu'

export const getRecipeById = async(id: string): Promise<Recipe> => {
    const result = await connection
    .select('*')
    .from(userTableName)
    .where({id})

    return result[0]
}