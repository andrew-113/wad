document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    const newUser = { name, email, password };
  
    // Simulate AJAX POST using fetch (mocked)
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => response.json()).then(data => {
      console.log("Mock POST response:", data);
      
      // Save to localStorage
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
  
      alert("User registered!");
      document.getElementById("registrationForm").reset();
    });
  });
  