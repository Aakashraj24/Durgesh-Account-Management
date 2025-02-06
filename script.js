document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            let tableBody = document.getElementById("table-body");
            let totalAmount = 0;
            let sentAmount = 0;

            data.forEach(item => {
                let row = document.createElement("tr");

                row.innerHTML = `
                    <td>${item.date}</td>
                    <td>${item.time}</td>
                    <td>${item.name}</td>
                    <td>${item.amount}</td>
                    <td>${item.status}</td>
                `;

                tableBody.appendChild(row);

                let amount = parseInt(item.amount.replace("₹ ", ""));
                if (item.status === "Received") {
                    totalAmount += amount;
                } else if (item.status === "Sent") {
                    sentAmount += amount;
                }
            });

            document.getElementById("total-amount").textContent = `₹ ${totalAmount}`;
            document.getElementById("available-balance").textContent = `₹ ${totalAmount - sentAmount}`;
        })
        .catch(error => console.error("Error fetching data:", error));
});
let a4page = document.querySelector('#capture');
let jpgButton = document.querySelector("#imgButton");
jpgButton.addEventListener('click',()=>{
        html2canvas(document.querySelector("#capture"), {
            scale: 3,  // Increases resolution for better quality
            backgroundColor: null, // Keeps background transparent (or set a color)
            useCORS: true, // Allows cross-origin images
        }).then(canvas => {
            let imgData = canvas.toDataURL("image/jpeg", 1.0); // High-quality JPG

            let link = document.createElement("a");
            link.download = "Durgesh_Account_Management.jpg";
            link.href = imgData;
            link.click();
        });
})
