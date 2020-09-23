import OssUpload from './upload-ali'
import QiniuUpload from './upload-qiniu'

// 获取上传实例
function Upload(params) {
  const { file, options } = params
  const { uploadConfig } = options

  if (uploadConfig && uploadConfig[file.type] === 'qiniu') {
    return new QiniuUpload({ ...params })
  }

  return new OssUpload({ ...params })
}

export default Upload
