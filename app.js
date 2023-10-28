document.querySelector(".click").onclick = function () {
    if (document.querySelector(".newItem input").value.length == 0) {
        alert("Please write something on input");
    } else {
        document.querySelector("#tag").innerHTML += `
        <div class="list">
            <span class="listname">
                ${document.querySelector(".newItem input").value}
            </span>
            <button class="delete">
               Delete
            </button>
        </div>`;

        let deleteButtons = document.querySelectorAll(".delete");
        deleteButtons.forEach((button) => {
            button.onclick = function () {
                this.parentNode.remove();
            };
        });

        let listItems = document.querySelectorAll(".list");
        listItems.forEach((item) => {
            item.onclick = function () {
                this.classList.toggle("complete");
            };
        });

        document.querySelector(".newItem input").value = "";
    }
};
