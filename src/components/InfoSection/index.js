import React from 'react'
import { Button } from 'react-scroll'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Subtitle, Column2 } from './InfoElements'

export const InfoSection = () => {
    return (
        <>
            <InfoContainer >
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                        <TextWrapper>
                            <TopLine>
                                TopLine
                            </TopLine>
                            <heading>heading</heading>
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
