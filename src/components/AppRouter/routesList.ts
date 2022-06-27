import React from "react";
import AnimeDetailsPage from "../Pages/AnimeDetailsPage/AnimeDetailsPage";
import MainComponent from "../Pages/MainComponent/MainComponent";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { ROUTES } from "./consts";

interface Ilink {
  element: string | React.FunctionComponent;
  path: string;
}

export const publicRoutes: Array<Ilink> = [
  { element: MainComponent, path: ROUTES.MAIN_COMPONENT },
  { element: AnimeDetailsPage, path: ROUTES.ANIME_DETAILS },
  { element: VideoPlayer, path: ROUTES.ANIME_PAGE },
];
export const privateRoutes: Array<Ilink> = [{ element: "A", path: "/b" }];
