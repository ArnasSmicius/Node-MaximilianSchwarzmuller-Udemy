export async function addToCart(productId) {
  const response = fetch("http://localhost:3001/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      productId: productId,
    }),
  });
  return await response;
}

export async function getCart() {
  const response = await fetch("http://localhost:3001/cart");
  return response.json();
}

export async function deleteCartProduct(prodId) {
  const response = fetch("http://localhost:3001/cart", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      productId: prodId,
    }),
  });
  return await response;
}
