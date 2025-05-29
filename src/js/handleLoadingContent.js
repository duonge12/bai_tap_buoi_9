document.querySelectorAll("a[data-page]").forEach((link) => {
	link.addEventListener("click", async (e) => {
		e.preventDefault(); // Prevent page reload
		const url = e.target.getAttribute("data-page");
		const sectionContent = document.querySelector("section.content");
		sectionContent.innerHTML = ``;
		try {
			const response = await fetch(url);
			const responseHtml = await response.text();
			const responseBody = document.createElement("body");
			responseBody.innerHTML = responseHtml;

			const content = responseBody.querySelector("div.container");
			const script = responseBody.querySelector("script");

			sectionContent.append(content);
			eval(script.textContent);
		} catch (err) {
			const message = err;
			sectionContent.innerHTML = `<p>${message}</p>`;
		}
	});
});
