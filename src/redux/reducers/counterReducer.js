import { DECREMENT, INCREMENT } from '../actions/actionType'

const initState = {
    count: 0,
    value: ''
}

const counterReducers = (times = initState, action) => {
    switch (action.type) {
        case INCREMENT: 
            return {
                ...times,
                count:times.count + action.step++,
                value: "Ok"
            }
        case DECREMENT:
            return {
                ...times,
                count: times.count -  action.step--,
                value: "No Ok"
            }
        default:
            return times;
    }
}

export default counterReducers;
//registerReducer.data?.user == ===
//Object
// {
//     user: 'abc',
//     id: '123',
//     ...asda
// }

// count = "1";

// if(count == 1)

// {check ? console.log("asdasda") : null}
// {!!check && (console.log("asdasda"))}
