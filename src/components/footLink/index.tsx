import React from 'react';
import {useState} from 'react';
import { Tooltip, Space, Alert } from 'antd';
import { TwitterOutlined, MailOutlined, SlackOutlined, GithubOutlined, CloseCircleOutlined } from '@ant-design/icons';
import {SubscribeMail} from '../subscribeMail/';
import {Link, EmailModal} from './styles';

export const FooterLink = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Space>
        <Tooltip title="@StoneDB2022">
          <Link to="https://twitter.com/StoneDB2022">
            <TwitterOutlined />
          </Link>
        </Tooltip>
        <Tooltip title="dev@stonedb.io">
          <Link to="" onClick={showModal}>
            <MailOutlined />
          </Link>
        </Tooltip>
        <Link to="https://join.slack.com/t/stonedb/shared_invite/zt-18loq1bo1-nqlQ5qZ4WwTbx5ykIigAcQ">
          <SlackOutlined />
        </Link>
        <Tooltip title="">
          <Link to="">
            <GithubOutlined />
          </Link>
        </Tooltip>
      </Space>
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
    </>
  )
}
