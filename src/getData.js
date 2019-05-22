import faker from 'faker';

const createFakeRowData = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  city: faker.address.city(),
  salary: faker.random
    .number({
      min: 50000,
      max: 500000
    })
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
});

export default () => Array.from({ length: 2000 }, createFakeRowData);