import React from "react";
import style from "../styles/Footer.module.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import ButtonStyle from "../styles/Button.module.scss";

interface Props {
};

const Footer: React.FC<Props> = (): React.ReactElement => {
  return (
    <footer className={style.footer}>
      Yu Xue ©2021 <span>
        <a target="_blank" href="https://github.com/Yuuuuuu-xue">
          <IconButton className={ButtonStyle.github}>
            <GitHubIcon />
          </IconButton>
        </a>
      </span>
    </footer>
  )
};

export default Footer;
