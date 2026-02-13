function copyCode(){
    const el = document.getElementById("codeBlock");
    const text = el.innerText;
    navigator.clipboard.writeText(text);
    alert("Copied!");
  }
  