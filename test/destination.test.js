// test/destination.test.js
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js'; // Assurez-vous que votre app Express est exportée

chai.use(chaiHttp);
const { expect } = chai;

describe('Destinations API', () => {
  it('should create a new destination', (done) => {
    chai.request(app)
      .post('/api/destinations')
      .send({
        nom: 'Paris',
        pays: 'France',
        prixParNuit: 150,
        description: 'Ville des lumières'
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('nom', 'Paris');
        done();
      });
  });
});