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
