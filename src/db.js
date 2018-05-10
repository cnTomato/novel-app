/*
* Created by pan 2018/5/10
*
*/

import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'


const adapter = new LocalStorage('db');
const db = low(adapter);


export default db;