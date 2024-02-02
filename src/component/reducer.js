export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return { count: state.count + 1, show: state.show };
        case 'Toggle':
            return { count: state.count, show: !state.show };
        default:
            return state;
    }
};

// export const myReducer = () => {
    
// }