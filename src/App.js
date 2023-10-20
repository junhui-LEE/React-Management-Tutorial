import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'
import Paper from '@material-ui/core/Paper';
import { Table, TableBody } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles'; 

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    // overflowY: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
    {
      'id' : 1,
      'image' : 'https://picsum.photos/id/237/64/64',
      'name' : '나동빈',
      'birthday' : '961222',
      'gender' : '남자',
      'job' : '대학생'
    },

    {
    'id' : 2,
    'image' : 'https://picsum.photos/id/27/64/64',
    'name' : '홍길동',
    'birthday' : '960305',
    'gender' : '남자',
    'job' : '프로그래머'
    },

    {
    'id' : 3,
    'image' : 'https://picsum.photos/id/23/64/64',
    'name' : '이순신',
    'birthday' : '921205',
    'gender' : '남자',
    'job' : '디자이너'
    }
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> );})} 
            </TableBody>
          </Table>
        </Paper>
    );
  }
}

export default withStyles(styles)(App);
