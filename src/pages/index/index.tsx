import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import './index.scss'
import {useState} from "react";

import Home from '../components/home/home';

export default function () {

  const [currentTab, setCurrentTab] = useState(0);
  // @ts-ignore
  const [tabListData, setTabListData] = useState({
    list: [
      {title: '首页', iconType: 'home'},
      {title: '分类', iconType: 'playlist'},
      {title: '发现', iconType: 'streaming'},
      {title: '购物车', iconType: 'shopping-cart'},
      {title: '我的', iconType: 'user'}
    ]
  })

  const clickTabBar = (value) => {
    setCurrentTab(value);
  }

  return (
    <View className="index">
      <Home></Home>
      <AtTabBar className="tabBarBottom" current={currentTab} tabList={tabListData.list} onClick={clickTabBar} fixed />
    </View>
  )
}
