let request = require('supertest');

// We use function() {...} deliberately instead of () => {...} because Mocha
// (the underlying test framework) is unable to do some of its test magic using
// arrow functions from what I can tell.
describe('loading express', function() {
    let server;

    beforeEach(function(done) {
        const app = require('./app');
        const http = require('http');

        server = http.createServer(app);
        server.listen(3000, done);
    });
    afterEach(function(done) {
        server.close(done);
    });

    it('responds to /', function testBaseUrl (done) {
        request(server)
            .get('/')
            .expect(200, done);
    });

    it('404 everything else', function testBrokenLink (done) {
        request(server)
            .get('/does/not/exist')
            .expect(404, done);
    });
});
