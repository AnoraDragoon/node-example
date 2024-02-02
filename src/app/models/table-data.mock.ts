import { faker } from '@faker-js/faker';

import { TableData } from './table-data.model';

export const DATA_TABLE_MOCK: TableData[] = [];

function createRandomData(): TableData {
    return {
        code: faker.string.uuid(),
        name: faker.finance.accountName(),
        author: faker.person.fullName(),
        date: faker.date.past(),
        amount: faker.number.float({ min: 10000, max: 1000000, multipleOf: 0.01 }),
        quantity: faker.number.int({ min: 10, max: 10000, })
    };
}

for (let index = 0; index < 100; index++) {
    DATA_TABLE_MOCK.push(createRandomData());
}
