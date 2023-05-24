import { proxy } from "valtio";

const state = proxy({
    currPage: "home",

})

export default state;