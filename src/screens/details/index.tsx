import { BodyDetails } from "../../components/BodyDetails";
import { Summary } from "../../components/Summary";
import { DetailsContainer } from "./styled";

export function Details () {
  return(
   <DetailsContainer>
      <Summary/>
      <BodyDetails/>
   </DetailsContainer>
  )
}