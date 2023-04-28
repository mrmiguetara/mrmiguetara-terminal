import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  window.open('https://mrmiguetara.github.io/Portfolio', '_self');

  return 'Opening GUI version...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:mrmiguetara@gmail.com');

  return 'Opening mailto:mrmiguetara@gmail.com...';
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/m4tt72/terminal', '_blank');
  }, 1000);

  return 'Opening repository...';
};

export const donate = async (args?: string[]): Promise<string> => {
  window.open(packageJson.funding.url, '_blank');

  return 'Opening donation url...';
};

export const banner2 = (args?: string[]): string => {
  return `
 __       __            __       __  __                                  __                                  
/  \\     /  |          /  \\     /  |/  |                                /  |                                 
$$  \\   /$$ |  ______  $$  \\   /$$ |$$/   ______   __    __   ______   _$$ |_     ______    ______   ______  
$$$  \\ /$$$ | /      \\ $$$  \\ /$$$ |/  | /      \\ /  |  /  | /      \\ / $$   |   /      \\  /      \\ /      \\ 
$$$$  /$$$$ |/$$$$$$  |$$$$  /$$$$ |$$ |/$$$$$$  |$$ |  $$ |/$$$$$$  |$$$$$$/    $$$$$$  |/$$$$$$  |$$$$$$  |
$$ $$ $$/$$ |$$ |  $$/ $$ $$ $$/$$ |$$ |$$ |  $$ |$$ |  $$ |$$    $$ |  $$ | __  /    $$ |$$ |  $$/ /    $$ |
$$ |$$$/ $$ |$$ |      $$ |$$$/ $$ |$$ |$$ \\__$$ |$$ \\__$$ |$$$$$$$$/   $$ |/  |/$$$$$$$ |$$ |     /$$$$$$$ |
$$ | $/  $$ |$$ |      $$ | $/  $$ |$$ |$$    $$ |$$    $$/ $$       |  $$  $$/ $$    $$ |$$ |     $$    $$ |
$$/      $$/ $$/       $$/      $$/ $$/  $$$$$$$ | $$$$$$/   $$$$$$$/    $$$$/   $$$$$$$/ $$/       $$$$$$$/ 
                                        /  \\__$$ |                                                           
                                        $$    $$/                                                            
                                         $$$$$$/                                                             

Hi, my name is Miguel Alejandro González Jiménez
I'm a software engineer and currently enrolled in a M.S. program at the University of Puerto Rico.
Type 'help' to see list of available commands.

For example, you can type 'projects' to see a list of my most relevant projects
--

--
`;
};

export const banner = (args?: string[]): string => {
  return `
##     ## ####  ######   ##     ## ######## ##           ######    #######  ##    ## ########    ###    ##       ######## ######## 
###   ###  ##  ##    ##  ##     ## ##       ##          ##    ##  ##     ## ###   ##      ##    ## ##   ##       ##            ##  
#### ####  ##  ##        ##     ## ##       ##          ##        ##     ## ####  ##     ##    ##   ##  ##       ##           ##   
## ### ##  ##  ##   #### ##     ## ######   ##          ##   #### ##     ## ## ## ##    ##    ##     ## ##       ######      ##    
##     ##  ##  ##    ##  ##     ## ##       ##          ##    ##  ##     ## ##  ####   ##     ######### ##       ##         ##     
##     ##  ##  ##    ##  ##     ## ##       ##          ##    ##  ##     ## ##   ###  ##      ##     ## ##       ##        ##      
##     ## ####  ######    #######  ######## ########     ######    #######  ##    ## ######## ##     ## ######## ######## ######## 

Hi, my name is Miguel Alejandro González Jiménez
I'm a software engineer and currently enrolled in a M.S. program at the University of Puerto Rico.
Type 'help' to see list of available commands.

For example, you can type 'projects' to see a list of my most relevant projects.

Type 'gui' to see a more visual version of my portfolio.
--

--
`;
};
