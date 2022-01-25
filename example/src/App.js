import React from 'react'
import { Upload, Button } from 'antd'
import 'antd/dist/antd.css';
import { UploadOutlined } from '@ant-design/icons';

import ImgCrop from 'antd-img-crop-resize'
import 'antd-img-crop-resize/dist/index.css'

const App = () => {

  const cropProps = {
    modalTitle: "Creative Size",
    aspect: 1/2,
    // beforeCrop: () => {
    //   if (!(height && width)) {
    //     message.error({
    //       content: "Please select Creative size before uploading image",
    //       style: {
    //         marginTop: '20vh',
    //         marginLeft: '80vw',
    //       },
    //     });

    //     return false
    //   }
    //   return true
    // }
  }

  return (
    <>
    <ImgCrop {...cropProps}>
      <Upload
        accept=".gif, .jpeg, .png"
        maxCount={1}
        progress={{
          strokeColor: {
            '0%': '#108ee9',
            '100%': '#87d068',
          },
          strokeWidth: 3,
          format: percent => `${parseFloat(percent.toFixed(2))}%`,
        }}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload> 
    </ImgCrop>
    </>
  )


}

export default App
