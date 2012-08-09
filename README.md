#jQuery Fit

jQuery Fit is a plugin that will center and crop your images to fit perfectly in their container.

##Download

- [Source](http://github.com/jgallen23/fit)
- [Development](https://raw.github.com/jgallen23/fit/master/dist/jquery.fit.js)
- [Production](https://raw.github.com/jgallen23/fit/master/dist/jquery.fit.min.js)

##Usage

```js
$('.resize img').fit();
```

##Options

```js
$('.resize img').fit({
	resizeParent: true //will resize the container to fit the resized image's aspect ratio
});
```

##Events

```js
$('img')
	.fit()
	.on('fit', function() {
		//fires after EACH image has been processed 
	})
	.on('end', function() {
		//fires after ALL images have been processed
	});
```
