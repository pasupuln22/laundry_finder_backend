import MySqli from 'mysqli';

let conn = new MySqli({
    host: 'localhost',
    post: '3306',
    user: 'root',
    passwd: 'H@cker22',
    db: 'laundry_finder'
});

export const   database = conn.emit(false, '');

module.exports = {
    database: db
}
