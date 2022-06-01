/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Tooltip, Space, Alert } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import type {Props} from '@theme/Footer/LinkItem';
import {IconFont, SubscribeMail} from '@site/src/components';
import {Link, EmailModal, LinkItemStyle} from './styles';

export default function FooterLinkItem({item}: Props): JSX.Element {
  const {to, href, label, icon, onclick, ...props} = item;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const clickMap = {
    'subscribe': showModal
  }

  return (
    <LinkItemStyle>
      {
        label && label !== ' ' ? (
          <Tooltip title={label}>
            <Link to={href} onClick={clickMap[onclick as string] || null}>
              <IconFont type={icon as string} />
            </Link>
          </Tooltip>
        ) : (
          <Link to={href}>
            <IconFont type={icon as string} />
          </Link>
        )
      }
      {
        onclick ? (
          <EmailModal
            title={null}
            visible={isModalVisible}
            width={776}
            closeIcon={<CloseCircleOutlined />}
            footer={null}
            onCancel={handleCancel}
          >
            <Space size={50}>
              <SubscribeMail.Tip/>
              <Alert message={<SubscribeMail.Message />} type="info" />
            </Space>
          </EmailModal>
        ) : null
      }
    </LinkItemStyle>
  );
}
