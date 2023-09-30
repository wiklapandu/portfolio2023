import {ajaxCallGet} from "./func/api";

export const getPortfolios = () => {
    return ajaxCallGet('/portfolios?populate=*');
}