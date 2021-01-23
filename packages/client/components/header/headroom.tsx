import styled from '@emotion/styled'
import OriginalHeadroom from 'react-headroom'

const Headroom = styled(OriginalHeadroom)`
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
  }
  .headroom--scrolled {
    transition: transform 200ms ease-in-out;
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0%);
  }
`

export default Headroom
