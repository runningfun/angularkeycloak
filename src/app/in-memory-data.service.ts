import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {id: 1, accountName: 'myAccount', email: 'info@stefan-herschbach.de', firstName: 'stefan', lastName: 'test'},
      {id: 2, accountName: 'willy', email: 'info@stefan-willy.de', firstName: 'steve', lastName: 'Willy'},
      {id: 3, accountName: 'harry', email: 'info@harry.de', firstName: 'harry', lastName: 'Potter'},
      {id: 4, accountName: 'hermine', email: 'info@hermine.de', firstName: 'hermins', lastName: 'granger'},
    ];
    return {users};
  }
}
