const chai = require('chai');
const chaiHttp = require('chai-http');
const app$ = require('../app'); // Assuming your Express app file is in the parent directory
console.log('app' , app$)

chai.use(chaiHttp);

const expect = chai.expect;

describe('Express App', () => {
  it('should return "Hello, World!" on / GET', (done) => {
    chai
      .request(app$)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });

  it('should return a 404 status code on a non-existent route', (done) => {
    chai
      .request(app$)
      .get('/nonexistent')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
