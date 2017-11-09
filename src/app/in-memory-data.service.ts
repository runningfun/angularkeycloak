import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {id: 1, accountName: 'myAccountInMemoryDbService', email: 'info@stefan-herschbach.de', firstName: 'stefan', lastName: 'test'},
      {id: 2, accountName: 'willyInMemoryDbService', email: 'info@stefan-willy.de', firstName: 'steve', lastName: 'Willy'},
      {id: 3, accountName: 'harryInMemoryDbService', email: 'info@harry.de', firstName: 'harry', lastName: 'Potter'},
      {id: 4, accountName: 'hermineInMemoryDbService', email: 'info@hermine.de', firstName: 'hermins', lastName: 'granger'},
    ];
    return {users};
  }
}
