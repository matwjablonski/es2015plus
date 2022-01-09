const cities = require('../index');

describe('Cities', () => {
    describe('getTotalPopulationOfCities()', () => {
        it('should return sum of populations of all cities', () => {
            expect(cities.getTotalPopulationOfCities()).toBe(22.593000000000004);
        });
    });
    
    describe('isSomeCityPopulationLessThen() with 3', () => {
        it('should return true', () => {
            expect(cities.isSomeCityPopulationLessThen(3)).toBe(true);
        });
    })
    
    describe('isSomeCityPopulationLessThen() with 1', () => {
        it('should return false', () => {
            expect(cities.isSomeCityPopulationLessThen(1)).toBe(false);
        });
    });
});