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
function createData(id, date, title, category, user, good) {
  return { id, date, title, category, user, good};
}

const rows = [
  createData(0, '16 Mar, 2019', '20年後の職業', 'ビジネス', 'ksato', '10'),
  createData(1, '16 Mar, 2019', '将来', 'ビジネス', 'ksato', '10'),
  createData(2, '16 Mar, 2019', '儲かるビジネス', 'ビジネス', 'NoName', '10'),
  createData(3, '16 Mar, 2019', 'シータの活用法', '製品', 'KJ', '10'),
  createData(4, '-', '', '', '', ''),
  createData(5, '-', '', '', '', ''),
  createData(6, '-', '', '', '', ''),
  createData(7, '-', '', '', '', ''),
  createData(8, '-', '', '', '', ''),
  createData(9, '-', '', '', '', ''),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  title: {
    margin: theme.spacing(3,2,2),
  },
}));

export default function ideaListPage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h2 className={classes.title}>みんなのアイデア</h2>
      {/* <h2>みんなのアイデア</h2> */}
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>投稿日</TableCell>
            <TableCell>タイトル</TableCell>
            <TableCell>カテゴリ</TableCell>
            <TableCell>投稿者</TableCell>
            <TableCell>いいね</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.user}</TableCell>
              <TableCell>{row.good}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="/idea/all">すべて表示</Link>
      </div>
    </React.Fragment>
  );
}