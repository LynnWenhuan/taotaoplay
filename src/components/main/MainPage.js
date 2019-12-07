/**
 * Created by Lynnlin on 2019/12/7.
 */

import React from 'react';
import { connect } from 'dva';
import { View, TabBar, ActivityIndicator } from 'antd-mobile';
import SearchPage from './MainSearch';
// import MainSetted from '../../components/main/mainSetted';
// import MainSearchAll from '../../components/main/mainSearchAll';
/* eslint-disable */

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }
  autoSearch = () => {

  }
  search = () => {
  }

  render() {
    const { loading } = this.props;
    return (
      <View style={{ height: '100%' }}>
        <ActivityIndicator animating={loading || false} toast text="正在加载" />
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#5176AB"
          barTintColor="white"
          hidden={false}
        >
          <TabBar.Item
            title="发现"
            key="Life"
            icon={<img alt="daiban" src={require('../../assets/png/icon_daiban_n.png')} style={{ width: 22, height: 24 }} />}
            selectedIcon={<img alt="daiban" src={require('../../assets/png/icon_daiban_h.png')} style={{ width: 22, height: 24 }} />}
            selected={this.state.selectedTab === 'blueTab'}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            <SearchPage />
          </TabBar.Item>
          <TabBar.Item
            icon={<img alt="yiban" src={require('../../assets/png/icon_yiban_n.png')} style={{ width: 22, height: 24 }} />}
            selectedIcon={<img alt="yiban" src={require('../../assets/png/icon_yiban_h.png')} style={{ width: 22, height: 24 }} />}
            title="已办"
            key="Koubei"
            // badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {/* <SearchPage reqType="2" /> */}
          </TabBar.Item>
          <TabBar.Item
            icon={<img alt="chaxun" src={require('../../assets/png/icon_chaxun_n.png')} style={{ width: 22, height: 24 }} />}
            selectedIcon={<img alt="chaxun" src={require('../../assets/png/icon_chaxun_h.png')} style={{ width: 22, height: 24 }} />}
            title="查询"
            key="Friend"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {/* <MainSearchAll /> */}
          </TabBar.Item>
          <TabBar.Item
            icon={<img alt="shezhi" src={require('../../assets/png/icon_shezhi_n.png')} style={{ width: 22, height: 24 }} />}
            selectedIcon={<img alt="shezhi" src={require('../../assets/png/icon_shezhi_h.png')} style={{ width: 22, height: 24 }} />}
            title="设置"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {/* <MainSetted /> */}
          </TabBar.Item>
        </TabBar>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    main: state.main,
    loading: state.loading.models.main,
  };
}

export default connect(mapStateToProps)(MainPage);
