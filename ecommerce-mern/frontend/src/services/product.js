export async function getAllProducts() {
  const response = await fetch("http://localhost:3001");
  return response.json();
}

export async function addProduct(title) {
  const response = fetch("http://localhost:3001/admin/add-product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: title }),
  });
  return await response;
}
