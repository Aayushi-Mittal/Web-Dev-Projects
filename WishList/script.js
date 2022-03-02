let add_btn = document.querySelector('.add_btn');
let delete_btn = document.querySelector('.delete');
let checkbox = document.querySelector('.checkbox')
let label = document.querySelector('.item_name')
let input = document.querySelector('.item_to_add');
let itemContainer = document.querySelector('.list');
let list=JSON.parse(localStorage.getItem('list')) || [];

renderList();

add_btn.addEventListener('click', function(e){
    if(input.value=='')
        alert("Value should not be empty!");
    else {
        item_name=input.value;
        list.push({
            text: item_name,
            isDone: false,
        })
        localStorage.setItem("list", JSON.stringify(list));
        renderList();
    }
});

// delete_btn.addEventListener('click', function(e){
//     // let item_index = e.target.parentElement.getAttribute('data-key');
//     // item_name=label.innerHTML;
//     let item_index=parseInt(label.for);
//     list[item_index].done = !(list[item_index].done);
//     console.log("Removed:", item_index);
//     // localStorage.removeItem(list[text],item_name);
//     list.remove(list.text=item_name);
//     localStorage.setItem("list", JSON.stringify(list));
//     renderList();
// });

checkbox.addEventListener('change',function(e){
    let item_index=parseInt(checkbox.name);
    list[item_index].done = !(list[item_index].done);
    console.log("Toggled:", list[item_index]);
    localStorage.setItem("list", JSON.stringify(list));
    renderList();
});

function renderList()
{
    console.log(list);
    output=[]
    list.map((item,i)=>{
        output.push(`
            <li class="item">
                <input class="checkbox ${item.isDone ? 'checked' : ''}" type="checkbox" name="${i}" required ${item.isDone ? 'checked=true' : ''} />
                <label for="${i}" class="item_name">${item.text}</label>
                <!-- <button class="delete"><i class="fi fi-rr-trash"></i></button> -->
            </li>
        `);
    })
    itemContainer.innerHTML = output.join('');
}