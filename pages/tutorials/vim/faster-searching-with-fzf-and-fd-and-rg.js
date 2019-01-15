import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NavBar from '../../../common/navbar';
import Link from 'next/link'
import BashCodeBlock from '../../../common/bash-code-block';


const styles = theme => ({});


class FasterSearchingWithFzfAndFdAndRg extends React.Component {
    render = () => (
        <div>
            <NavBar />
            <Card>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                    >
                        faster searching with fzf and fd and rg
                    </Typography>
                    <BashCodeBlock
                        lines={[
                            "brew install fd rg",
                        ]}
                    />
                    <BashCodeBlock
                        lines={[
                            "# .vimrc",
                            "call plug#begin('~/.vim/plugged')",
                            "Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --bin' }",
                            "Plug 'junegunn/fzf.vim'",
                            "call plug#end()",
                            " ",
                            "nnoremap <C-p> :Files<CR>",
                            "nnoremap <C-f> :Files<CR>",
                            "nnoremap <C-g> :Rg<CR>",
                        ]}
                    />
                    <BashCodeBlock
                        lines={[
                            "# .zshrc or .bashrc",
                            "export FZF_DEFAULT_COMMAND=\"fd --type file --color=always\"",
                            "export FZF_DEFAULT_OPTS=\"--ansi -i\"",
                        ]}
                    />
                </CardContent>
            </Card>
        </div>
    )
}

export default withStyles(styles)(FasterSearchingWithFzfAndFdAndRg);

