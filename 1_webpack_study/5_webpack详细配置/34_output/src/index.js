console.log("index is loading");

import {add} from './add';
console.log(add(1, 2));


// import plus from './plus';
import ('./plus').then(({default: plus}) => {
    console.log(plus(1, 2));
});
console.log(plus(1, 2));

