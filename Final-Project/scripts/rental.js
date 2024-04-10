const url = "https://austindavis01.github.io/wdd230/Final-Project/data/rental.json";
const article = document.getElementById("print");


fetch(url)
	.then(res => res.json())
	.then(data => {

		data.buisness.forEach((repo) => {

			let section = `<section">
				<h2 class="heading">${repo.name}</h2>
				<div>
					<div>
						<img class="bussimage" src="images/${repo.image}">
					</div>
					<div>
						<div>
							<h3>Max Persons</h3>
							<p>${repo.max-persons}</p>
						</div>
						<div>
							<h3>Half Day (3hrs)</h3>
							<p>${repo.half-day-reservation}</p>
						</div>
						<div>
							<h3>Full Day</h3>
							<p>${repo.full-day-reservation}</p>
						</div>

						<h3>Walk ins</h3>

						<div>
							<h3>Half Day (3hrs)</h3>
							<p>${repo.half-day-walkin}</p>
						</div>
						<div>
							<h3>Full Day</h3>
							<p>${repo.full-day-walkin}</p>
						</div>
					</div>
				</div>
			</section>`
			article.innerHTML += section;
		  });
	})