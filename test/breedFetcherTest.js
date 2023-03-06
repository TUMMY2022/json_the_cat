// breedFetcherTest.js

const { fetchBreedDetails } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDetails ', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDetails('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns a string description for an found breed, via callback', (done) => {
    fetchBreedDetails('Siberiax', (err, desc) => {
      expectedErr = 'breed not found';
      assert.equal(err, expectedError.trim());
      assert.equal(desc, null);
      done();
    });
  });
});