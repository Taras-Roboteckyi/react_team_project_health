import styled from 'styled-components';
import main_bg_tablet from '../../images/sidebar_bg_tablet.png';
import main_bg_desktop from '../../images/sidebar_bg_desktop.png';

export const Section = styled.section`
  padding: 40px 20px 80px 20px;
  background-color: ${props => props.theme.colors.$lightGrey};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: bottom right;
    background-image: url(${main_bg_tablet});
    /* position: absolute; */
    padding: 80px 20px 80px 20px;
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    /* background: url(${main_bg_desktop}) right no-repeat; */

    /*    background-size: 50%;
    background-repeat: no-repeat;
    background-position: right;
    background-image: url(${main_bg_desktop}); */
    background-image: none;
    padding: 300px 140px 200px 100px;
    width: 520px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    /* background-color: ${props => props.theme.colors.$lightGrey}; */
  }
`;

export const Wrapper = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: block;
  }
`;

export const SummaryContainer = styled.div`
  padding-bottom: 40px;
`;

export const SummaryText = styled.p`
  font-size: 14px;
  line-height: ${props => props.theme.lineHeight.verdanaHeight};
  margin-bottom: 25px;
`;

export const ListStyle = styled.ul`
  /* list-style: none; */
  /* padding-left: 0px; */
  /*  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center; */
`;

export const ListItemStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  line-height: ${props => props.theme.lineHeight.verdanaHeight};
  color: ${props => props.theme.colors.$grey};

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const TextStyle = styled.p`
  font-size: 14px;
  line-height: ${props => props.theme.lineHeight.verdanaHeight};
  color: ${props => props.theme.colors.$grey};
`;

export const BgImageStyled = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    background: url(${main_bg_tablet}) bottom right no-repeat;
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    background: url(${main_bg_desktop}) right no-repeat;
  }
`;
export const ProductStyle = styled.span`
  font-size: 14px;
  line-height: ${props => props.theme.lineHeight.verdanaHeight};
  color: ${props => props.theme.colors.$grey};
`;

export const FoodContainer = styled.div`
  /*  padding-bottom: 80px; */
`;