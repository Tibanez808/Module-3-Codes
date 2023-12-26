function createArticle() {
	
	// DOM variables
	let title = document.querySelector('#createTitle')
	let content = document.querySelector(`#createContent`)
	let section = document.querySelector('#articles')

	// validation
	if(!title.value.trim() || !content.value.trim()) {
		alert(`Please enter the title and content field`)
		return
	}
	let article = document.createElement('article')
	article.innerHTML = `
	<h3>${title.value}</h3>
	<p>${content.value}</p>
	`
	// article.appendChild(title)
	// article.appendChild(content)

	section.appendChild(article)

	title.value = '';
	content.value = '';
}