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

	if (split && time.includes(split)) {
		time = time.split(split)
	}else if(split){
		throw new TypeError(`split:${split}, but time is no incldues`)
	}

	if (typeof time === 'string') {

		if (time) {
			let timeQueue = []

			function getNum(str) {
				let i = time.indexOf(str)
				if (i > -1) {
					let n = time.substring(0, i)
					time = time.slice(i + 1) // change source
					if(!isNaN(+n)){
						return +n
					}else{
						throw new TypeError(`${n} type must be a number, but got ${typeof n}`)
					}
				}
				return 0
			}
			timeName.forEach(name => {
				timeQueue.push(getNum(name))
			})

			timeQueue = timeQueue.map((q,i) =>{
				return (q * timeSeconds[i])
			})

			timeQueue.forEach(seconds =>{
				timeNUM += seconds
			})
		}

	}else if(time instanceof Array){
		function getNum(str) {
			let n = str.slice(0,-1)
			if(!isNaN(+n)){
				return +n
			}else{
				throw new TypeError(`${n} type must be a number, but got ${typeof n}`)
			}
		}
		function getTimeName(str) {
			return str.slice(-1)
		}

		let timeMap = {}
		timeName.forEach((name,i) =>{
			timeMap[name] = timeSeconds[i]
		})

		time = time.map(t =>{
			let secondTime
			let N = getTimeName(t)
			if(N && timeMap[N]){
				secondTime = getNum(t) * timeMap[N]
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
