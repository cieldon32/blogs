import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {SubscribeStyle, Message, TipStyle, Doc, Mail} from './styles';

const Subscribe: React.FC = () => {

  return (
    <BrowserOnly>
      {
        () => (
          <SubscribeStyle>
            <Doc>
              <Mail size={50}>
                <Message />
                <TipStyle />
              </Mail>
            </Doc>
          </SubscribeStyle>
        )
      }
    </BrowserOnly>
  );
};
export default Subscribe;