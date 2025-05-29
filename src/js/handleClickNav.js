const navItem = document.querySelectorAll("header nav ul li");
navItem.forEach((item, index, navList) => {
	item.addEventListener("click", () => {
		item.classList.add("active-nav-item");
		console.log(`Clicked on nav item:`);
		navList.forEach((nav, itemIndex) => {
			if (itemIndex !== index) {
				nav.classList.remove("active-nav-item");
			}
		});
	});
});
