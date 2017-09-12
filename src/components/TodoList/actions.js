import { ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM } from './actionTypes'

export const addItem = (content) => ({
  type: ADD_ITEM,
  content: content,
})

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  id: id,
})

export const toggleItem = (id) => ({
  type: TOGGLE_ITEM,
  id: id,
})