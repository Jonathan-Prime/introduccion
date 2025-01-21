async function create(blogPost) {
  try {
    // Create the URL
    const url = "https://jsonplaceholder.typicode.com/posts";

    // Create the headers
    const headers = {
      "Content-Type": "application/json",
    };

    // Create the POST body
    const body = JSON.stringify({
      title: blogPost.title,
      body: blogPost.body,
      userId: blogPost.userId,
    });

    // Send the POST request
    const response = await fetch(url, { method: "POST", headers, body });
    console.log(response);
    // Check the response status
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();
    console.log("Success:", data);
  } catch (error) {
    // Handle any errors
    console.error("Error:", error);
  }
}

create({
  title: "Test Post",
  body: "This is a test post",
  userId: 1,
});

// First, select the element.
// Selecciona el primer elemento con la clase 'prueba'
/* let h1Element = document.getElementsByClassName('prueba');
console.log(h1Element)
if (h1Element) {
  // Cambia su clase
  h1Element.className = 'textocolor';
} else {
  console.log('No se encontró ningún elemento con la clase "prueba".');
}
 */

const getUsers = async () => {
  let id = 10;
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const response = await fetch(url);
  return await response.json();
};

getUsers();
