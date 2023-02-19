import { useContext } from "react";
import { GitHubContext } from "../../context/GitHubContext";
import { ProfileContainer, ProfileContent, ProfileDescription, ProfileImage, ProfileLoading, ProfileName, ProfileResume, ProfileSocial } from "./styled";

export function Profile() {
  const { profile } = useContext(GitHubContext)

  if (profile.id) {

    return (
      <ProfileContainer>
        <ProfileContent>
          <ProfileImage src={profile.avatar_url} alt="Profile Picture" />
          <ProfileResume>
            <ProfileName>
              <h1>{profile.name}</h1>
              <a href={profile.html_url} target='_blank'>GITHUB<i className="fa-solid fa-arrow-up-right-from-square" /></a>
            </ProfileName>
            <ProfileDescription>
              {profile.bio} <i className="fa-solid fa-location-dot" /> {profile.location}
            </ProfileDescription>
            <ProfileSocial>
              <span><i className="fa-brands fa-github" />{profile.login}</span>
              <span><i className="fa-solid fa-building" />{profile.company}</span>
              <span><i className="fa-solid fa-user-group" />{profile.followers} seguidores</span>
            </ProfileSocial>
          </ProfileResume>
        </ProfileContent>
      </ProfileContainer>
    )

  } else {

    return (
      <ProfileContainer>
        <ProfileContent>
          <ProfileLoading>
            <i className="fa-solid fa-spinner fa-2xl"></i>
          </ProfileLoading>
        </ProfileContent>
      </ProfileContainer>
    )
    
  }



}