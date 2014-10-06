var test = 'testing';

d3.selectAll('.empty')
	.data(data)
	.enter().append('div')
	.text('some text');