/**
 * Created by LynnLin on 2019/12/7.
 */

import React from 'react';
import { connect } from 'dva';
import { View, WhiteSpace, SearchBar } from 'antd-mobile';

class searchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _onChange = (v) => { // 搜索框输入内容保存
    this.props.dispatch({
      type: 'main/save',
      payload: { needquy: v },
    });
  };

  render() {
    const { main } = this.props;
    return (
      <View >
        <WhiteSpace />
        <SearchBar
          value={main.needquy}
          placeholder="请输入或粘贴链接进行搜索"
          onChange={v => this._onChange(v)}
        />
        <WhiteSpace />
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { main: state.main };
}

export default connect(mapStateToProps)(searchPage);
