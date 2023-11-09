const menuItem = document.querySelectorAll(".menu-item")
menuItem.forEach(function(item) {
    item.onclick = (e) => {
        const currentItem = document.querySelector(".active")
        currentItem.classList.remove("active")
        e.target.classList.add("active")
    }
})