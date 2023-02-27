# storage-class-js

Here's an example of a simple storage class in JavaScript that uses the global window object:

## Usage

const storage = new Storage();

storage.setItem('username', 'johndoe');
const username = storage.getItem('username'); // returns 'johndoe'

storage.removeItem('username');

storage.clear();