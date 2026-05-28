  let fontSize = 16;
  let visible = true;

  function changeHeading() {
    const text = document.getElementById("input").value;
    if (text !== "") {
      document.getElementById("heading").innerText = text;
    }
  }

  function changeBackground() {
    const colors = ["#f0f4f8", "#ffe4e1", "#e6ffe6", "#e6f0ff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }

  function increaseFont() {
    fontSize += 2;
    document.getElementById("heading").style.fontSize = fontSize + "px";
  }

  function toggleParagraph() {
    const para = document.getElementById("para");
    visible = !visible;
    para.style.display = visible ? "block" : "none";
  }

  function resetAll() {
    document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
    document.body.style.backgroundColor = "#f0f4f8";
    document.getElementById("para").style.display = "block";
    fontSize = 16;
    document.getElementById("heading").style.fontSize = fontSize + "px";
  }