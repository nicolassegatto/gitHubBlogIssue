import { useContext } from "react";
import { Card } from "../../components/Card";
import { Profile } from "../../components/Profile";
import { SearchBar } from "../../components/SearchBar";
import { GitHubContext } from "../../context/GitHubContext";
import { CardGridContent, CardNoContent, HomeContainer } from "./styled";

export function Home() {

  const { issues } = useContext(GitHubContext)

  if (issues.total_count >= 1) {
    return (
      <HomeContainer>
        <Profile />
        <SearchBar />
        <CardGridContent>
          {issues.items.map(OBJ => {
            return <Card key={OBJ.id} issue={OBJ} />
          })}
        </CardGridContent>
      </HomeContainer>
    )
  } else {
    return (
      <HomeContainer>
        <Profile />
        <SearchBar />
        <CardNoContent>
          <p>Não encontramos nenhum post para a pesquisa solicitada</p><i className="fa-solid fa-face-sad-cry" />
        </CardNoContent>
      </HomeContainer>
    )
  }

}