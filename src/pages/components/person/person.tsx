import {Button, View} from "@tarojs/components";
import Taro from "@tarojs/taro";
import {useEffect, useState} from "react";
import user from "../../state/user";

import './person.scss'
import {AtList, AtListItem} from "taro-ui";

const Person = function () {

  const [staus, setStatus] = useState(user.nickName);

  useEffect(() => {

    //登录
    if (!user.isLogin) {
      Taro.cloud.callFunction({
        name: 'login',
      })
        .then((res) => {
          console.log(res);
          // @ts-ignore 类型问题
          let openid = res?.result ? res.result['openid'] : undefined;
          user.openId = openid;
        })
    }

  }, [])

  return (
    <View>{
      staus ?
        (<AtList>
          <AtListItem
            title={user.nickName}
            thumb={user.avatarUrl}
          />
          <AtListItem
            title='我的订单'
            note='描述信息'
            arrow='right'
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
          <AtListItem
            title='我的优惠券'
            note='描述信息'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
          />
          <AtListItem
            title='设置'
            thumb=''
          />
        </AtList>)

        :

        (<View className={"authorize"}>
          <View className={"card"}>
            <View className={"card-title"}>授权获取用户信息</View>

            <Button onClick={() => {
              Taro.getUserProfile({
                desc: '用于完善用户资料',
                success: result => {
                  for (let item in result.userInfo) {
                    user[item] = result.userInfo[item]
                  }
                  setStatus(user.nickName);
                },
                fail: res => console.log(res)
              })
            }}>授权</Button>
          </View>


        </View>)}
    </View>


  )

};

export default Person;
