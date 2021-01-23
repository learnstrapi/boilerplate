import styled from '@emotion/styled'
import {
  ButtonBack as PrcButtonBack,
  ButtonNext as PrcButtonNext,
  CarouselProvider as PrcCarouselProvider,
  ImageWithZoom as PrcImageWithZoom,
  Slide as PrcSlide,
  Slider as PrcSlider
} from 'pure-react-carousel'

export const ButtonBack = styled(PrcButtonBack)``
export const ButtonNext = styled(PrcButtonNext)``
export const CarouselProvider = styled(PrcCarouselProvider)``
export const ImageWithZoom = styled(PrcImageWithZoom)``
export const Slide = styled(PrcSlide)``
export const Slider = styled(PrcSlider)`
  position: relative;
  overflow: hidden;

  [dir='rtl'] & {
    direction: ltr;
    transform: scaleX(-1);
  }

  &Tray {
    overflow: hidden;
    width: 100%;
  }

  .verticalSlider {
    position: relative;
    overflow: hidden;

    &Tray {
      overflow: hidden;
    }
  }

  .verticalTray {
    float: left;
  }

  .verticalSlideTrayWrap {
    overflow: hidden;
  }

  .sliderTray {
    display: block;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .sliderAnimation {
    transition: transform 500ms;
    transition-timing-function: cubic-bezier(
      0.645,
      0.045,
      0.355,
      1
    ); /* easeInOutCubic */
    will-change: transform;
  }

  .masterSpinnerContainer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #f4f4f4;
  }
`
