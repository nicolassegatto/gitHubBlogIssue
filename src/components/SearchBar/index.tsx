import { useContext } from "react";
import { GitHubContext } from "../../context/GitHubContext";
import { SearchBarContainer, SearchBarContent, SearchBarForm, SearchBarTitles } from "./styled";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputsProps = z.infer<typeof searchFormSchema>

export function SearchBar() {

  const { issues, SearchIssues } = useContext(GitHubContext)

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInputsProps>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInputsProps) {
    SearchIssues(data.query)
  }
  console.log(issues)
  return (
    <SearchBarContainer >

      <SearchBarContent>

        <SearchBarTitles>
          <p>Publicações</p>
          {<span>
            {issues.items !== undefined ?
              (`${issues.items.length <= 1 ?
                (`${issues.items.length} publicação`)
                :
                (`${issues.items.length} publicações`)}`)
              :
              (`0 publicação`)}
          </span>}
        </SearchBarTitles>
        <SearchBarForm onSubmit={handleSubmit(handleSearchIssues)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
          <button type="submit" disabled={isSubmitting}>
            <i className="fa-solid fa-magnifying-glass" />
            Buscar
          </button>
        </SearchBarForm>

      </SearchBarContent>

    </SearchBarContainer>
  )
}