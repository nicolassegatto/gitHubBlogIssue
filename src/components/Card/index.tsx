import { CardContainer, CardContent, CardDescription, CardTitle } from "./styled";
import {formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useContext } from "react";
import { GitHubContext } from "../../context/GitHubContext";
import { useNavigate } from "react-router-dom";

interface CardIssueProps {
  issue: {
    id : number
    number: number,
    title: string,
    state: string,
    user: {
      login: string,
    },
    comments: number,
    created_at: string,
    body: string
    html_url: string
  }
}

export function Card({ issue }: CardIssueProps) {

  const navigate = useNavigate()
  const {SetIssue} = useContext(GitHubContext)

  function handlerClick() {
    SetIssue(issue)
    navigate(`/details/${issue.id}`)
  }

  return (
    <CardContainer onClick={handlerClick}>
      <CardContent>
        <CardTitle>
          <h1>{issue.title}</h1>
          <span>
            {formatDistanceToNow(new Date(issue.created_at), {locale: ptBR,})}
          </span>
        </CardTitle>
        <CardDescription>
          {`${issue.body.substring(0, 120)}...`}
        </CardDescription>
      </CardContent>
    </CardContainer>
  )
}