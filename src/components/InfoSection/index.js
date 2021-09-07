import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Subtitle, Column2 } from './InfoElements'

export const InfoSection = ({lightBg, id, topLine, lightText, headLine }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id="about">
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                        <TextWrapper>
                            <TopLine>
                                {topLine}
                            </TopLine>
                            <heading>{headLine}</heading>
                            <Subtitle>Subtitle</Subtitle>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}
