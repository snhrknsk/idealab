import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import HomeIcon from '@material-ui/icons/Home';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import InfoIcon from '@material-ui/icons/Info';

/**
 * メニューコンポーネント
 * templatePageで利用
 */
export const mainListItems = (
  <div>
    <ListItem component="a" href="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="トップ" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="アカウント" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <NoteAddIcon />
      </ListItemIcon>
      <ListItemText primary="新規作成" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <OpenInNewIcon />
      </ListItemIcon>
      <ListItemText primary="開く" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="アイデア研究所とは" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="グレードアップ" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <NewReleasesIcon />
      </ListItemIcon>
      <ListItemText primary="規約" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <QuestionAnswerIcon />
      </ListItemIcon>
      <ListItemText primary="お問い合わせ" />
    </ListItem>
  </div>
);