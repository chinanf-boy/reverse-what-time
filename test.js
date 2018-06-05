import test from 'ava';
import m from '.';
const DaySeconds = 3600 * 24

test.failing('boolean time false -> fail', t => {
	let s = m(false)

	t.is(s,0)
});

test('string time 0s', t => {
	let s = m('0s')

	t.is(s,0)
});

test('string time 0s', t => {
	let s = m('0s')

	t.is(s,0)
});

test('string time 1s', t => {
	let s = m('1s')

	t.is(s,1)
});

test.failing('string time "1m1s", split=`,` ->fail', t => {
	let s = m('1m1s',',')

	t.is(s,1)
});

test('string time 1h', t => {
	let s = m('1h')

	t.is(s,3600)
});

test('string time 1Y2M1W1d3h6m44s', t => {
	let s = m('1Y2M1W1d3h6m44s')
	t.is(s,37422404)
});

test('Array time 1Y2M1W1d3h6m44s', t => {
	let s = m('1Y,2M,1W,1d,3h,6m,44s',',')
	t.is(s,37422404)
});


test('string time 1Y1h', t => {
	let s = m('1Y1h')
	let n = 3600 + DaySeconds * 365
	t.is(s,n)
});

test('Array time 1Y1h', t => {
	let s = m('1Y,1h',',')
	let n = 3600 + DaySeconds * 365
	t.is(s,n)
});


test('string time 5Y1h', t => {
	let s = m('5Y1h')
	let n = 3600 + DaySeconds * 365 * 5
	t.is(s,n)
});


test('Array time 5Y1h', t => {
	let s = m('5Y,1h',',')
	let n = 3600 + DaySeconds * 365 * 5
	t.is(s,n)
});
