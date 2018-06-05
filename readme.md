# reverse-what-time [![Build Status](https://travis-ci.org/chinanf-boy/reverse-what-time.svg?branch=master)](https://travis-ci.org/chinanf-boy/reverse-what-time) [![codecov](https://codecov.io/gh/chinanf-boy/reverse-what-time/badge.svg?branch=master)](https://codecov.io/gh/chinanf-boy/reverse-what-time?branch=master)

> reverse human readable time to number

## Install



```
npm install reverse-what-time
```

```
yarn add reverse-what-time
```




## Usage

```js
const reverseWhatTime = require('reverse-what-time');

reverseWhatTime('1Y2M1W1d3h6m44s');
// : 1 year 2 mouths 1 week 1 day 3 hours 6 minutes 44 seconds
// 37422404
```


## API

### reverseWhatTime(time, split)

#### time

name: | time
---------|----------
Type: | `string`
Desc: | time : human readable

##### split

 name: | split
---------|----------
Type: | `string`
Default: | ``
Desc: | split time

## concart

- [what-time](https://github.com/chinanf-boy/what-time) human readable time



## License

MIT © [chinanf-boy](http://llever.com)
