import { formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GitHubContext } from "../../context/GitHubContext";
import { SummaryBackButton, SummaryButtons, SummaryContainer, SummaryContent, SummaryGitButton, SummaryName, SummaryResume, SummarySocial } from "./styled";

export function Summary() {

  const { selectedIssue } = useContext(GitHubContext)

  if (selectedIssue.number >= 1) {
    return (
      <SummaryContainer>
        <SummaryContent>
          <SummaryResume>

            <SummaryButtons>
              <SummaryBackButton to={'/'}><i className="fa-solid fa-chevron-left" /><span>VOLTAR</span></SummaryBackButton>
              <SummaryGitButton href={selectedIssue.html_url} target='_blank'>VER NO GITHUB<i className="fa-solid fa-arrow-up-right-from-square" /></SummaryGitButton>
            </SummaryButtons>

            <SummaryName>
              {selectedIssue.title}
            </SummaryName>

            <SummarySocial>
              <span><i className="fa-brands fa-github" />{selectedIssue.user.login}</span>
              <span><i className="fa-solid fa-calendar-day" />{formatDistanceToNow(new Date(selectedIssue.created_at), { locale: ptBR, })}</span>
              <span><i className="fa-solid fa-comment" />{`${selectedIssue.comments} Comentários`}</span>
            </SummarySocial>

          </SummaryResume>
        </SummaryContent>
      </SummaryContainer>
    )
  } else {
    return (
      <SummaryContainer>
        <SummaryContent>
          <SummaryResume>
            <SummaryButtons>
              <SummaryBackButton to={'/'}><i className="fa-solid fa-chevron-left" /><span>VOLTAR</span></SummaryBackButton>

            </SummaryButtons>
            <SummaryName style={{fontFamily:'Roboto', fontSize: '1.5rem',}}>
              {`Estou ciente que deveria chamar uma api para buscar os dados, para que sempre que eu recarregue a pagina ela carregue as informaçoes, porem isto é um portifólio, não existe a necessidade de ficar usando recursos do backend!`}
            </SummaryName>
          </SummaryResume>
        </SummaryContent>
      </SummaryContainer>
    )
  }

}

