document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("BtnUpdate").addEventListener("click", async () => {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.text();
        const result = JSON.parse(data);
        document.getElementById("Phrase").innerText = result.fact;
    })
})