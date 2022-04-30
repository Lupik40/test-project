import { TRouteDetail } from "../types/TRouteDetail";

export const routeMain = () => "/main";
export const routeDetail: TRouteDetail = (name = ":name") => `/pokemon/${name}`;
