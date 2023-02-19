import { useContext } from "react";
import { GitHubContext } from "../../context/GitHubContext";
import { SearchBarContainer, SearchBarContent, SearchBarForm, SearchBarTitles } from "./styled";


export function SearchBar() {

  const {issues} = useContext(GitHubContext)

  return (
    <SearchBarContainer >

      <SearchBarContent>

        <SearchBarTitles>
          <p>Publicações</p>
          <span>{issues.items.length <= 1 ? (`${issues.items.length} publicação`): (`${issues.items.length} publicações`)} </span>
        </SearchBarTitles>
        <SearchBarForm>
          <input
            type="text"
            placeholder="Buscar conteúdo"
          />
          <button type="submit" >
            <i className="fa-solid fa-magnifying-glass" />
            Buscar
          </button>
        </SearchBarForm>
        
      </SearchBarContent>

    </SearchBarContainer>
  )
}