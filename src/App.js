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
    overflowY: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
    {
      'id' : 1,
      'image' : 'https://media.istockphoto.com/id/1309101136/ko/%EC%82%AC%EC%A7%84/%EB%B6%84%EB%85%B8-%EB%82%A8%EC%9E%90-%ED%98%BC%EB%9E%80-%EC%9D%B4%EB%AF%B8%EC%A7%80.webp?b=1&s=612x612&w=0&k=20&c=_EDaXbqbZDPD0Hvu_mLrPNDa8n6nIzbqtnO_jsRxH_I=',
      'name' : '나동빈',
      'birthday' : '961222',
      'gender' : '남자',
      'job' : '대학생'
    },

    {
    'id' : 2,
    'image' : 'https://media.istockphoto.com/id/1167770705/ko/%EC%82%AC%EC%A7%84/%EA%B3%A0%EB%A6%BD-%EB%90%9C-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD-%EC%9C%84%EC%97%90-%EC%98%A4%EB%A0%8C%EC%A7%80-%EC%8A%A4%EC%9B%A8%ED%84%B0%EB%A5%BC-%EC%9E%85%EC%9D%80-%EC%A0%8A%EC%9D%80-%EC%9D%B8%EB%8F%84-%EB%82%A8%EC%9E%90%EB%8A%94-%EC%86%90%EC%9C%BC%EB%A1%9C-%EA%B8%8D%EC%A0%95%EC%A0%81-%EC%9D%B8-%EC%A0%9C%EC%8A%A4%EC%B2%98%EB%A5%BC%ED%95%98%EA%B3%A0-%EC%97%84%EC%A7%80-%EC%86%90%EA%B0%80%EB%9D%BD%EC%9C%BC%EB%A1%9C-%EB%AF%B8%EC%86%8C%EB%A5%BC-%EC%A7%93%EA%B3%A0-%EC%84%B1%EA%B3%B5%EC%9D%84-%EC%9C%84%ED%95%B4-%ED%96%89%EB%B3%B5%ED%95%A9%EB%8B%88%EB%8B%A4-%EC%9A%B0%EC%8A%B9%EC%9E%90-%EC%A0%9C%EC%8A%A4%EC%B2%98.webp?b=1&s=612x612&w=0&k=20&c=bftLoPZTj39Sio6kq89saUWVFWszdosu1n2ly67nyPg=',
    'name' : '홍길동',
    'birthday' : '960305',
    'gender' : '남자',
    'job' : '프로그래머'
    },

    {
    'id' : 3,
    'image' : 'https://media.istockphoto.com/id/653844526/ko/%EC%82%AC%EC%A7%84/%EC%83%90%EB%9F%AC%EB%93%9C%EB%A5%BC-%EB%A8%B9%EB%8A%94-%EC%BE%8C%ED%99%9C%ED%95%9C-%EB%82%A8%EC%9E%90%EC%9D%98-%EC%B4%88%EC%83%81%ED%99%94.webp?b=1&s=612x612&w=0&k=20&c=h1ZHp8C7R6H6Cg2p1YxgJJD0Y9EPnZ_IAcGJ0twpdVg=',
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
