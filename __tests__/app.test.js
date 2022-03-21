const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('any-api routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('creates a plant', async () => {
    const expected = {};

    const res = await request(app).post('/api/v1/houseplants').send(expected);
    
    expect(res.body).toEqual(expected);
  });
});
