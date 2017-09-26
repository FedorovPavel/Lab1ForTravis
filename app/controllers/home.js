var express 	= require('express'),
	router 		= express.Router(),
	mongoose 	= require('mongoose'),
	Cars 		= mongoose.model('Car');

module.exports = function (app) {
	app.use('/', router);
};

router.get('/', function (req, res, next) {
	Cars.find(function (err, cars) {
		if (err) 
			return next(err);
		else {
			res.render('index', {
				title	: 'Cars',
				cars	: cars
			});
		}
	});
});

router.get('/cars', function(req, res, next) {
	Cars.find(function(err, cars) {
		if (err)
			return next(err);
		else {
			res.status(200).send(cars);
		}
	});
});

router.post('/car', function(req, res, next) {
	let n_manufacture 	= req.body.man;
	let n_model 		= req.body.mod;
	let n_color			= req.body.col;
	
	let new_car = new Cars({
		manufacturer	: n_manufacture,
		model 			: n_model,
		color	  		: n_color
	});
	new_car.save(function(err, result){ 
		if (err)
			return next(err);
		else {
			res.status(200).send(result);
		}
	});
});

