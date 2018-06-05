'use strict';
module.exports = (time, split = '') => {
	let timeNUM = 0

	const DaySeconds = 3600 * 24
	let timeName = ['Y', 'M', 'W', 'd', 'h', 'm', 's']
	let timeSeconds = [
		DaySeconds * 365,
		DaySeconds * 30,
		DaySeconds * 7,
		DaySeconds,
		3600,
		60,
		1
	]

	if (split && typeof time === 'string') {
		time = time.split(split)
	}

	if (typeof time === 'string') {

		if (time) {
			let timeQueue = []

			function getNum(str) {
				let i = time.indexOf(str)
				if (i > -1) {
					let n = time.substring(0, i)
					time = time.slice(i + 1)
					return n
				}
				return 0
			}
			timeName.forEach(name => {
				timeQueue.push(getNum(name))
			})

			timeQueue = timeQueue.map((q,i) =>{

				return (+q * timeSeconds[i])
			})

			timeQueue.forEach(seconds =>{
				timeNUM += seconds
			})
		}

	}else if(time instanceof Array){
		function getNum(str) {
			return str.slice(0,-1)
		}

		time = time.map(t =>{

			let matchIndex
			let secondTime = null
			timeName.some((name,i) =>
				{
					let b = t.includes(name)
					if(b){
						matchIndex = i
					}
					return b
				}
			)

			if(matchIndex >= 0){
				secondTime = +getNum(t) * timeSeconds[matchIndex]
			}

			return secondTime
		})

		time.forEach(seconds =>{
			seconds && (timeNUM += seconds)
		})
	}else{

		throw new TypeError(`need String, got ${typeof time}`)
	}



	return timeNUM
};
