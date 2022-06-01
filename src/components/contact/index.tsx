import React from 'react';
import {Row, Col, Divider, Image} from 'antd';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';
import { IconFont } from "../icon";
import {Title, Context} from '../styles'
import {DL, DT, DD, Item, US} from './styles';

const Concat = () => {
  const {
    i18n: {currentLocale}
  } = useDocusaurusContext();
  const linkToIssue = () => {
    window.open("https://github.com/StoneAtom/stonedb/issues", 'blank');
  }
  return (
    <Context>
      <Title>
        <Translate id="home.contact.title">
          关注我们
        </Translate>
      </Title>
      <Row>
        <Col span={12}>
          <DL>
            <DT onClick={linkToIssue}>
              <IconFont type="icon-a-bianzu251" />
              <Translate id="home.bug.title">
                提问&Bug反馈
              </Translate>
            </DT>
            <DD>
              <Translate id="home.bug.desc">
                想要提出功能需求，使用求助，或者反馈bug?
              </Translate>
            </DD>
          </DL>
          <DL>
            <DT>
              <IconFont type="icon-a-bianzu24" />
              <Translate id="home.subscribe.title">
                订阅邮件
              </Translate>
            </DT>
            <DD>
              <Translate id="home.subscribe.desc">
                接受最新功能更新、开源社区活动消息
              </Translate>
            </DD>
          </DL>
        </Col>
        {
          currentLocale === 'en' ? (
            <Col span={12}>
              <DL>
                <DT onClick={linkToIssue}>
                  <IconFont type="icon-a-bianzu18beifen2" />
                  <Translate id="home.slack.title">
                    Join our slack workspace!
                  </Translate>
                </DT>
                <DD>
                  <Translate id="home.slack.desc">
                  . We will invite you in.
                  </Translate>
                </DD>
              </DL>
              <DL>
                <DT>
                  <IconFont type="icon-a-bianzu25" />
                  <Translate id="home.release.title">
                    Release AtomStore 1.0.0
                  </Translate>
                </DT>
                <DD>
                  <Translate id="home.release.desc">
                    is released. Go to downloads page to find …
                  </Translate>
                </DD>
              </DL>
            </Col>
          ) : (
            <US span={8} offset={4}>
              <Item>
                <IconFont type="icon-a-bianzu27"  className='icon' />
                <Translate id="home.social">
                  关注公众号
                </Translate>
                <Image className='more' width={80} src="http://static.stoneatom.com/assets/rc-upload-1654065031076-2_qrcode_for_gh_8fb79cdb61cd_344.jpg" />
              </Item>
              <Divider />
              <Item>
                <IconFont type="icon-a-bianzu27beifen" className='icon' />
                <Translate id="home.concat">
                  联系我们
                </Translate>
                <span className='more'>
                  dev@StoneDB.io
                </span>
              </Item>
            </US>
          )
        }
      </Row>
    </Context>
  )
}
export default Concat;