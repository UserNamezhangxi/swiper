/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
    Text
} from 'react-native';

import Swiper from 'react-native-swiper'

const {
    height,
    width
} = Dimensions.get('window');
const swiperH = 200;
type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.containerss}>
                    <Swiper
                        style={styles.swiper}
                        height={swiperH}               //组件高度
                        loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                        autoplay={true}                //自动轮播
                        autoplayTimeout={2}            //自动轮播时间
                        paginationStyle={{bottom: 10}} // 底部点距离
                        //自定义点样式
                        dot={<View style={{
                            backgroundColor: '#0003',
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3,
                        }}/>}
                        //自定义点样式
                        activeDot={<View style={{
                            backgroundColor: '#000a',
                            width: 10,
                            height: 10,
                            borderRadius: 8,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3
                        }}/>}
                        onIndexChanged={(e)=>{
                            alert(e)
                            //do something...
                        }}
                    >
                        <Image style={styles.image} source={require('./images/a.jpg')}/>
                        <Image style={styles.image} source={require('./images/b.jpg')}/>
                        <Image style={styles.image} source={require('./images/c.jpg')}/>
                    </Swiper>

                <View style={{height:height-swiperH, backgroundColor: '#0f0'}}>
                    <Text>
                        Hello
                    </Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    containerss: {
        flex: 1,
        backgroundColor: '#00f'
    },
    image: {
        width: width,
        height: swiperH
    },
    swiper: {
        width: width,
        height:swiperH,
        backgroundColor: '#a00',
        alignItems: 'center',
    },
    container: {
        flex: 1
    }
});
