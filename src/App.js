import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import { Paper } from '@material-ui/core';
import { isCompositeComponent } from 'react-dom/test-utils';
import { Table } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"

  },
  table: {
    minWidth: 1080
  }
})

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동1',
  'birthday': '941000',
  'gender': '남자',
  'job': '대학생'

},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길동2',
  'birthday': '940200',
  'gender': '남자',
  'job': '대학생'

},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '홍길동3',
  'birthday': '940300',
  'gender': '남자',
  'job': '대학생'

}
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
            {
              customers.map(c => {
                return (
                  <Customer
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    gender={c.gender}
                    job={c.job}
                  />
                );
              })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default withStyles(styles)(App);
