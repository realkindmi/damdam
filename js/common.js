document.addEventListener('DOMContentLoaded', function () {
	/* top, bottom area */
	let header = document.querySelectorAll('.header.t2');
	if (header.length > 0) header.forEach(e => e.nextElementSibling.style.paddingTop = e.offsetHeight + "px");

	let bottom = document.querySelectorAll('.bottom_area');
	if (bottom.length > 0) bottom.forEach(e => e.previousElementSibling.style.paddingBottom = e.offsetHeight + "px");

	/* tool tip */
	let tool_tip = document.querySelectorAll('.tool_tip');
	if (tool_tip.length > 0) {
		let fadeInInterval, fadeOutInterval;
		document.querySelector('.btn_info').addEventListener('click', function () {
			clearInterval(fadeInInterval);
			clearInterval(fadeOutInterval);

			tool_tip.fadeIn = function (timing) {
				let newValue = 0;

				tool_tip.style.display = 'block';
				tool_tip.style.opacity = 0;

				fadeInInterval = setInterval(function () {
					if (newValue < 1) {
						newValue += 0.01;
					} else if (newValue === 1) {
						clearInterval(fadeInInterval);
					}

					tool_tip.style.opacity = newValue;
				}, timing);
			}
			tool_tip.fadeIn(5);
		});

		document.querySelector('.tool_tip .tt_close').addEventListener('click', function () {
			clearInterval(fadeInInterval);
			clearInterval(fadeOutInterval);

			tool_tip.fadeOut = function (timing) {
				let newValue = 1;
				tool_tip.style.opacity = 1;

				fadeOutInterval = setInterval(function () {
					if (newValue > 0) {
						newValue -= 0.01;
					} else if (newValue < 0) {
						tool_tip.style.opacity = 0;
						tool_tip.style.display = 'none';
						clearInterval(fadeOutInterval);
					}
					tool_tip.style.opacity = newValue;
				}, timing);
			}
			tool_tip.fadeOut(5);
		});
	}

	/* contents dim */
	// TODO: 페이지 초기 호출시 dim 설정이 되어 있을 경우 사용. 해당 코드는 교통NFC 충전페이지에서만 사용하므로 해당 페이지에서 구현 후 삭제할 것.
	if (document.querySelector('.item_div.dim')) {
		let el = document.querySelector('.dim .input');
		if (el) el.setAttribute('disabled', true);
	}
});