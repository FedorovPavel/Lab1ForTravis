process.env.NODE_ENV = 'test';

var mongoose    = require('mongoose');
var DBmodel     = require('./../../app/models/cars');
var Cars        = mongoose.model('Car');

var chai        = require('chai'),
    chaiHttp    = require('chai-http'),
    server      = require('./../../app.js'),
    should      = chai.should();

chai.use(chaiHttp);

describe('home controller', function(){

    //  Clear DataBase 
    beforeEach(function(done){
        Cars.remove({},function(err){
            done();
        });
    });

    describe('Get cars in empty databases with get request', function(){
        it('Get /cars - check empty DB', function(done){
            chai.request(server)
                .get('/cars')
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

    describe('Create new car with full needed information with post request', function(){
        it('Post /car - create car', function(done){
            let car = {
                man : 'Nissan',
                mod : 'X-Trail',
                col : 'black'
            }
            chai.request(server)
                .post('/car')
                .send(car)
                .end(function(err, res){
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.manufacturer.should.be.eql('Nissan');
                    res.body.model.should.be.eql('X-Trail');
                    done();
                });
        });
    });
});