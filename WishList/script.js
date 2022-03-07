const form = document.querySelector(".add-items");
const itemsList = document.querySelector(".items-list");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
    e.preventDefault();
    const text = this.querySelector("[name=item]").value;
    items.push({ text: text, done: false });
    localStorage.setItem("items", JSON.stringify(items));
    renderList(items, itemsList);
}

function toggleCheck(e) {
    if (!e.target.matches("input")) return;
    const index = e.target.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem("items", JSON.stringify(items));
    renderList(items, itemsList);
}

function renderList(items = [], ItemsList) {
    ItemsList.innerHTML = items.map((item, i) => {
        return `
            <li class="item">
                <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? "checked" : ""} /> &nbsp;
                <label for="item${i}" ${item.done ? "class='checked'" : ""}">${item.text}</label>
            </li>
        `;}).join("");
}

form.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleCheck);
renderList(items, itemsList);
