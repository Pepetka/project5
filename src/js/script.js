document.addEventListener("DOMContentLoaded", function () {
	const cards = document.querySelectorAll(".card"),
		guide = document.querySelector(".guide"),
		dots = document.querySelectorAll(".dot"),
		burger = document.querySelector(".burger"),
		menu = document.querySelector(".header_menu")

	const imgArray = [
		"../img/bg/slider_bg_1.jpg",
		"../img/bg/slider_bg_2.jpg",
		"../img/bg/slider_bg_1.jpg",
		"../img/bg/slider_bg_2.jpg",
		"../img/bg/slider_bg_1.jpg",
	]

	const slideChanger = (slideNum, el) => {
		guide.style.backgroundImage = `url(${imgArray[slideNum - 1]})`

		dots.forEach((elem) => {
			elem.classList.remove("active-dot")
		})
		el.classList.add("active-dot")
	}

	cards.forEach((el) => {
		el.setAttribute("tabIndex", 0)

		el.addEventListener("click", function () {
			if (el.classList.contains("card_active")) {
				el.classList.remove("card_active")
				return
			}

			cards.forEach((elem) => {
				elem.classList.remove("card_active")
			})
			el.classList.add("card_active")
		})
	})

	let slideNum = 2

	const timerId = setInterval(() => {
		const el = document.querySelector(`[data-slide="${slideNum}"]`)
		slideChanger(slideNum, el)
		slideNum === 5 ? (slideNum = 1) : slideNum++
	}, 5000)

	dots.forEach((el) => {
		el.addEventListener("click", function () {
			const slideNum = el.getAttribute("data-slide")
			clearInterval(timerId)
			slideChanger(slideNum, el)
		})
	})

	burger.addEventListener("click", function () {
		burger.classList.toggle("active_burger")
		burger.classList.contains("active_burger")
			? menu.classList.add("header_menu_active")
			: menu.classList.remove("header_menu_active")
	})
})
