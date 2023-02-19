import { useContext } from "react";
import { GitHubContext } from "../../context/GitHubContext";
import { BodyDetailsContainer, BodyDetailsContent } from "./styled";
import ReactMarkdown from "react-markdown";

export function BodyDetails () {

  const {selectedIssue} = useContext(GitHubContext)
  //console.log(selectedIssue.body)
  return(
    <BodyDetailsContainer>
      <BodyDetailsContent>
        <ReactMarkdown>{selectedIssue.body}</ReactMarkdown>
      </BodyDetailsContent>
    </BodyDetailsContainer>
  )
}