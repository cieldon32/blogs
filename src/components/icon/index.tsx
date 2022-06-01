import React, { useEffect } from 'react';
import lottie from 'lottie-web'
import { createFromIconfontCN } from '@ant-design/icons';
import md5 from 'js-md5';
import {Span} from './styles';

const Icon = createFromIconfontCN({
    scriptUrl: [
        '//at.alicdn.com/t/font_3269731_buv0abhgp5m.js'
    ],
  });

  const onMouseEnter = (id: string) => {
    lottie.play();
  }

  const onMouseLeave = (id: string) => {
    lottie.stop();
  }


  export const IconFont = ({type, className, trigger}: any) => {
    const id = md5(type);
    useEffect(() => {
      if(type.indexOf('lottie-') >= 0) {
        const id = md5(type);
        lottie.loadAnimation({
          container: document.getElementById(id),
          renderer: 'svg',
          loop: true,
          autoplay: false,
          path: `https://stoneatom-static.oss-cn-hangzhou.aliyuncs.com/assets/${type}.json`
        });
        return () => {
          lottie.destroy();
        }
      }   
    }, []);

    return (
        <>
        {
            type.indexOf('lottie-') >= 0  ? (
              <Span id={id} className={`${className} icon`} onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave(id)}></Span>
            ) : (
              <Icon type={type} className={`${className} icon`} />
            )
        }
        </>
    )
  }