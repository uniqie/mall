import {View} from '@tarojs/components'
import {AtTabBar} from 'taro-ui'
import './index.scss'
import {useState} from "react";

import Home from '../components/home/home';
import Category from "../components/category/category";

export default function () {

  const [currentTab, setCurrentTab] = useState(1);
  // @ts-ignore
  const [tabList, setTabListData] = useState([
      {title: '首页', iconType: 'home', component: <Home />},
      {title: '分类', iconType: 'playlist', component: <Category />},
      {title: '发现', iconType: 'streaming'},
      {title: '购物车', iconType: 'shopping-cart'},
      {title: '我的', iconType: 'user'}
    ]
  )

  const clickTabBar = (value) => {
    setCurrentTab(value);
  }

  return (
    <View className="index">
      {
        tabList[currentTab].component
      }
      <AtTabBar className="tabBarBottom" current={currentTab} tabList={tabList} onClick={clickTabBar} fixed/>
    </View>
  )
}
