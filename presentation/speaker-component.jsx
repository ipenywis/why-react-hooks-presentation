import React from "react"
import styled from "styled-components"
import { Text, Heading, Layout, Fill, Image, Fit } from "spectacle"
import { MutedText } from "./styled-components"
import IpenywisLogo from "../assets/ipenywis_logo.png"
import SpeakerImage from "../assets/islempenywis_thumbnail.png"
import TwitterLogo from "../assets/twitter_logo.png"
import GithubLogo from "../assets/github_logo.png"
import YoutubeLogo from "../assets/youtube_logo.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons"

const ThumbnailImage = styled(Image)`
  width: 6.5em;
  height: 6.5em;
  /*background-image: ${props => `url(${props.imageUrl})`};*/
`

const LogoImage = styled(Image)`
  width: 0.9em;
  height: 1.2em;
`

const EndScreenLogoImage = styled(Image)`
  width: 0.9em;
  height: 1.2em;
  margin: 0 !important;
  margin-right: 24px !important;
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 24px;
  font-size: 38px;

  &:last-of-type {
    margin-right: 0;
  }
`

const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export default function SpeakerComponent(props) {
  return (
    <div>
      <Heading>Your Speaker!</Heading>
      <br />
      <br />
      <Layout>
        <Fill>
          <ThumbnailImage src={SpeakerImage} />
          <Text>
            Islem Maboud <MutedText>AKA</MutedText> <b>islempenywis</b>
          </Text>
          <br />
          <muted>
            Full Stack Web Developer and Technical Tutorials Maker on Youtube
            and Packt! Content Creator on <b>ipenywis.com</b>
          </muted>
          <br />
          <br />
          <br />
          <LogoImage src={IpenywisLogo} />
        </Fill>
      </Layout>
    </div>
  )
}

export function SpeakerEndScreen(props) {
  return (
    <div>
      <Heading size={1}>Thank you For Listening</Heading>
      <br />
      <br />
      <br />
      <Layout>
        <Fill>
          <ThumbnailImage src={SpeakerImage} />
          <Text>
            <b>@ipenywis</b>
          </Text>
          <br />
          <HorizontalWrapper>
            <EndScreenLogoImage src={IpenywisLogo} />
            <Icon icon={faGithub} size="1x" />
            <Icon icon={faYoutube} size="1x" color="#F70005" />
            <Icon icon={faTwitter} size="1x" color="#219DEB" />
          </HorizontalWrapper>
          <br />
          <MutedText>ipenywis.com</MutedText>
        </Fill>
      </Layout>
    </div>
  )
}
