import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import "./Footer.scss";

interface Props {
};

const Footer: React.FC<Props> = (): React.ReactElement => {
  return (
    <>
      <div className="footer-wrapper">
      </div>
      <footer className="footer">
        Yu Xue ©2021 <span>
          <a target="_blank" rel="noreferrer" href="https://github.com/Yuuuuuu-xue">
            <IconButton className="github">
              <GitHubIcon />
            </IconButton>
          </a>
        </span>
      </footer>
    </>
  )
};

export default Footer;
