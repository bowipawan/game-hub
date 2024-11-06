import { GameQuery } from "./../App";
import useData from "hooks/useData";
import { Genre } from "hooks/useGenres";
import { Platform } from "hooks/usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );
export default useGames;
