import { expect, server, BASE_URL } from './setup';
describe('Urls', () => {
  it('get urls page', done => {
    server
      .get(`${BASE_URL}/urls`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.urls).to.be.instanceOf(Array);
        res.body.urls.forEach(m => {
          expect(m).to.have.property('shortened_url');
          expect(m).to.have.property('original_url');
        });
        done();
      });
  });
});

it('posts urls', done => {
    const data = { original_url: 'some name'};
    server
      .post(`${BASE_URL}/urls`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.urls).to.be.instanceOf(Array);
        res.body.urls.forEach(m => {
          expect(m).to.have.property('id');
          expect(m).to.have.property('original_url', data.original_url);
          expect(m).to.have.property('shortened_url', data.shortened_url);
        });
        done();
      });
  });