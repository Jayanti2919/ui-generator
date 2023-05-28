import { proxy } from "valtio";

const state = proxy({
    currPage: "home",
    color: "#fff",
})

export default state;