import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Title from '../../base/title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', '20年後の職業', 'ksato'),
  createData(1, '16 Mar, 2019', '将来', 'ksato'),
  createData(2, '16 Mar, 2019', '儲かるビジネス', 'NoName'),
  createData(3, '16 Mar, 2019', 'シータの活用法', 'KJ'),
  createData(4, '15 Mar, 2019', '相棒サイドストーリー', 'R社'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function ideaListPage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h2>みんなのアイデア</h2>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>投稿日</TableCell>
            <TableCell>タイトル</TableCell>
            <TableCell>投稿者</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>すべて表示</Link>
      </div>
    </React.Fragment>
  );
}