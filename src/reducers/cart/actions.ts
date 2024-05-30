import { NavigateFunction } from 'react-router-dom'
import { Item } from './reducer'
import { OrderInfo } from '../../pages/Cart'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

type AddItemAction = {
  type: ActionTypes.ADD_ITEM
  payload: {
    item: Item
  }
}

type RemoveItemAction = {
  type: ActionTypes.REMOVE_ITEM
  payload: {
    itemId: Item['id']
  }
}

type IncrementItemQuantityAction = {
  type: ActionTypes.INCREMENT_ITEM_QUANTITY
  payload: {
    itemId: Item['id']
  }
}

type DecrementItemQuantityAction = {
  type: ActionTypes.DECREMENT_ITEM_QUANTITY
  payload: {
    itemId: Item['id']
  }
}

type CheckoutCartAction = {
  type: ActionTypes.CHECKOUT_CART
  payload: {
    order: OrderInfo
    callback: NavigateFunction
  }
}

export type Actions =
  | AddItemAction
  | RemoveItemAction
  | IncrementItemQuantityAction
  | DecrementItemQuantityAction
  | CheckoutCartAction

export function addItemAction(item: Item): AddItemAction {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  }
}

export function removeItemAction(itemId: Item['id']): RemoveItemAction {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  }
}

export function incrementItemQuantityAction(
  itemId: Item['id'],
): IncrementItemQuantityAction {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  }
}

export function decrementItemQuantityAction(
  itemId: Item['id'],
): DecrementItemQuantityAction {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  }
}

export function checkoutCartAction(
  order: OrderInfo,
  callback: NavigateFunction,
): CheckoutCartAction {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  }
}
