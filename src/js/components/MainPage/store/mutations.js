/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-param-reassign */
const main = {
    // setDiscussSortDirection(state, params){
    //     const DiscussSortDirection = JSON.parse(JSON.stringify(state.DiscussSortDirection));
    //     DiscussSortDirection[params.discussBoxId] = params.sortDirection;
    //     state.DiscussSortDirection = DiscussSortDirection;
    // },

    CheckAdBlock(state, data){
        state.adBlocked = data;
    },
};

export default main;