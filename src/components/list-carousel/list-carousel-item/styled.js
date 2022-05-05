import { APP_COLORS } from '@src/theme/colors';
import { radius, spacing } from '@src/theme/spacing';
import { scale, scaleFont } from '@src/utils/media';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const StyledImage = styled(FastImage)`
    resize-mode: ${FastImage.resizeMode.contain};
    width:  ${scale(230)}px;
    height: ${scale(250)}px;
    border-top-left-radius: ${radius.default+4}px;
    border-top-right-radius: ${radius.default+4}px;
`;

export const StyledWrapper = styled.View` 
    align-items: center;
`;

export const MovieInfoWrapper = styled.View` 
    position: absolute;
    background-color: rgba(12, 12, 12, 0.5);
    bottom: 0;
    padding: ${spacing.small}px;
    border-top-left-radius:  ${radius.double * 2}px;
    height: ${scale(80)}px;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${APP_COLORS.white};
    font-weight: bold;
    font-size: ${scaleFont(18)};
`;

export const SubTitle = styled.Text`
    color: ${APP_COLORS.white};
    font-weight: bold;
    font-size: ${scaleFont(18)};
`;

export const MetaInfo = styled.View`
    justify-content: center;
    align-items: center;
    background-color: ${APP_COLORS.blue};
    padding-vertical: ${spacing.xsmall}px;
`;

export const Container = styled.View`
    margin: ${spacing.medium}px;
`;
