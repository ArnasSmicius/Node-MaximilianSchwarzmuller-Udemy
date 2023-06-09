export async function getAllProducts() {
  const response = await fetch("http://localhost:3001/products/");
  return response.json();
}

export async function getProduct(productId) {
  const response = await fetch(`http://localhost:3001/products/${productId}`);
  return response.json();
}

export async function addProduct(title, imageUrl, description, price) {
  const response = fetch("http://localhost:3001/admin/add-product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title,
      imageUrl: imageUrl,
      description: description,
      price: price,
    }),
  });
  return await response;
}

export async function editProduct(id, title, imageUrl, description, price) {
  const response = fetch("http://localhost:3001/admin/edit-product", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      title: title,
      imageUrl: imageUrl,
      description: description,
      price: price,
    }),
  });
  return await response;
}

export async function deleteProduct(id) {
  const response = fetch(`http://localhost:3001/admin/delete-product`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
    }),
  });
  return await response;
}
