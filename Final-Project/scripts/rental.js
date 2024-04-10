const url = "https://austindavis01.github.io/wdd230/Final-Project/data/rental.json";
const article = document.getElementById("print");


fetch(url)
	.then(res => res.json())
	.then(data => {

		data.rental.forEach((repo) => {

			let section = `<section">
				<h2 class="heading">${repo.name}</h2>
				<div>
					<div>
						<img class="bussimage" src="images/${repo.image}">
					</div>
					<div>
						<div>
							<h3>Max Persons</h3>
							<p>${repo.maxpersons}</p>
						</div>
						<div>
							<h3>Half Day (3hrs)</h3>
							<p>${repo.halfdayreservation}</p>
						</div>
						<div>
							<h3>Full Day</h3>
							<p>${repo.fulldayreservation}</p>
						</div>

						<h3>Walk ins</h3>

						<div>
							<h3>Half Day (3hrs)</h3>
							<p>${repo.halfdaywalkin}</p>
						</div>
						<div>
							<h3>Full Day</h3>
							<p>${repo.fulldaywalkin}</p>
						</div>
					</div>
				</div>
			</section>`
			article.innerHTML += section;
		  });
	})