const cities = [
    'Madryt', 'Berlin', 'Warszawa', 'Tokio'
];

// map 

const citiesAsObjects = cities.map(city => ({
    name: city,
    visited: true,
    population: null,
}));

// forEach

const population = {
    'Madryt': 3.223,
    'Berlin': 3.645,
    'Warszawa': 1.765,
    'Tokio': 13.96
};

citiesAsObjects.forEach(city => {
    city.population = population[city.name];
})

// filter

const citiesWithMoreThanThreeMilionsPopulation = citiesAsObjects.filter(city => city.population > 3);

// some 

const isSomeCityPopulationLessThenThree = citiesAsObjects.some(city => city.population < 3);

// find 

const cityWithMoreThanThreeMilionsPopulation = citiesAsObjects.find(city => city.population > 3);

// reduce

const totalPopulation = citiesAsObjects.reduce((prev, curr) => prev + curr.population, 0);