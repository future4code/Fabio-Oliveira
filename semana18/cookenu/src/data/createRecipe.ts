import {connection} from '../index'
import { Recipe } from '../types/recipe'

const userTableName = 'RecipeCookenu'

export const createRecipe = async (recipe: Recipe): Promise<void> => {
    await connection
    .insert(recipe)
    .into(userTableName)
}