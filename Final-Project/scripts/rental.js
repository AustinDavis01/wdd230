const url = "https://austindavis01.github.io/wdd230/Final Project/data/rental.json"


fetch(url)
	.then(res => res.json())
	.then(data => {

		data.buisness.forEach((repo) => {

			let section = `<section">
				<h2 class="heading">${repo.name}</h2>
				<div>
					<img class="bussimage" src="images/${repo.image}">
					<p>${repo.adresses}</p>
					<p>${repo.phone}</p>
					<p>${repo.website}</p>
					<p>${repo.membership}</p>
				</div>
			</section>`
			display.innerHTML += section;
		  });
	})