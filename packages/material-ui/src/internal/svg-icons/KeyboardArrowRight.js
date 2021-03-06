import React from 'react';
import SvgIcon from '../../SvgIcon';

/**
 * @ignore - internal component.
 */
let KeyboardArrowRight = props => (
  <SvgIcon {...props}>
    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
  </SvgIcon>
);
KeyboardArrowRight = React.memo(KeyboardArrowRight);
KeyboardArrowRight.muiName = 'SvgIcon';

export default KeyboardArrowRight;
