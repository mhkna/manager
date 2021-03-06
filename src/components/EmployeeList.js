import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import { Card } from './common';

class EmployeeList extends Component {
  componentWillMount() {
    this.createDataSource();
  }

  createDataSource() {
    this.props.employeesFetch();
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <Card>
        <FlatList
          data={this.props.employees}
          renderItem={this.renderRow}
          keyExtractor={employee => employee.uid}
        />
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
