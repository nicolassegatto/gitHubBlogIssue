import { createContext, ReactNode, useCallback, useEffect, useState } from "react"
import { api } from "../lib/axios"
import {token} from "../../token"

interface GitHubContextTypeProps {
  children: ReactNode
}

interface GitHubProfileProps {
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean,
  name: string,
  company: string,
  blog: string,
  location: string,
  email: string | null,
  hireable: boolean,
  bio: string,
  twitter_username: string | null,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  created_at: string,
  updated_at: string
}

interface GitHubIssuesProps{
  total_count: number,
  incomplete_results: boolean,
  items : {
    id:number,
    number:number,
    title: string,
    state: string,
    user: {
      login: string,
    },
    comments: number,
    created_at: string,
    body: string
    html_url: string
  }[]
}

interface GitHubSelectedIssueProps{
  id:number,
  number:number,
  title: string,
  state: string,
  user: {
    login: string,
  },
  comments: number,
  created_at: string,
  body: string,
  html_url:string
}

interface GitHubContextType {
  profile: GitHubProfileProps,
  issues: GitHubIssuesProps,
  selectedIssue: GitHubSelectedIssueProps,
  SetIssue: (issue:GitHubSelectedIssueProps) => void,
  SearchIssues: (query:string) => void,
}

export const GitHubContext = createContext({} as GitHubContextType)

export function GitHubProvider ({children} : GitHubContextTypeProps) {

  const [profile, setProfile] = useState<GitHubProfileProps>({} as GitHubProfileProps)
  const [issues, setIssues] = useState<GitHubIssuesProps>({} as GitHubIssuesProps)
  const [selectedIssue, SetSelectedIssue] = useState<GitHubSelectedIssueProps>({} as GitHubSelectedIssueProps)

  function SetIssue(issue:GitHubSelectedIssueProps) {
    SetSelectedIssue(issue)
  }

  function SearchIssues(query:string) {
    getIssues(query)
  }

  const getProfile = useCallback(async () => {
    const response = await api.get('users/nicolassegatto', {
      auth: {
        username: "USERNAME",
        password: token
      }
    })
    .then((res) => {return res}).catch((e) => {return e})

    setProfile(response.data)
  },[])

  const getIssues = useCallback(async (query?:string) => {
    const response = await api.get(`search/issues?q=${query ? query : ''}repo:nicolassegatto/gitHubBlogIssue`, {
      auth: {
        username: "USERNAME",
        password: token
      }
    })
    .then((res) => {return res}).catch((e) => {return e})
    setIssues(response.data)
  },[])


  useEffect(() =>{
    getProfile(),
    getIssues()
  },[getProfile,getIssues])

  return(
    <GitHubContext.Provider value={
      {
        profile,
        issues,
        selectedIssue,
        SetIssue,
        SearchIssues,
      }
    }>
      {children}
    </GitHubContext.Provider>
  )
}