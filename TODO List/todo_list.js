add.addEventListener("click", () => {
    let task = inp.value.trim();
    if(task == ""){
        return -1;
    }
    let key = Date.now();
    localStorage.setItem(`task_${key}`, `${task}`);
    inp.value = "";
    display(key, task);
})

function display(key, value) {
    cont.innerHTML += ` <div id="${key}">
        <div class="cont">
            ${value}
            <button type="button" class="butt" onclick="deleteTask('${key}')">Delete</button>
        </div>
    </div>`;
}
function deleteTask(key) {
    localStorage.removeItem(key);
    const taskElement = document.getElementById(key);
    if (taskElement) taskElement.remove();
}
function loadTasks() {
    cont.innerHTML = ""; 
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("task_")) {
            const value = localStorage.getItem(key);
            display(key, value);
        }
    }
}
window.onload = loadTasks;