import { Component } from 'react'
import './app.scss'
import 'taro-ui/dist/style/index.scss'
import Taro from "@tarojs/taro"

class App extends Component {

  componentDidMount () {
    if(!Taro.cloud) {
      console.log('版本过低')
    }else {
      Taro.cloud.init({
        env: 'cloud1-8gfb5vcdfead22fc',
        traceUser: true
      });
    }

  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
