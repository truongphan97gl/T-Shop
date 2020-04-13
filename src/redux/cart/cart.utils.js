export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(item => item.id === cartItemToAdd.id);

  if (existingItem) {
    return cartItems.map(item => {
      if (item.id === cartItemToAdd.id) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      } else {
        return item;
      }
    });
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, carItemToRemove) => {
  const existingItem = cartItems.find(item => item.id === carItemToRemove.id);
  console.log(existingItem);
  if (existingItem.quantity === 1) {
    return cartItems.filter(item => item.id !== existingItem.id);
  }

  if (existingItem) {
    return cartItems.map(item => {
      if (item.id === existingItem.id) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      } else {
        return item;
      }
    });
  }
};
