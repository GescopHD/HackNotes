import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SystemeDeFichierComponent } from './Pages/Linux/systeme-de-fichier/systeme-de-fichier.component';
import { CronComponent } from './Pages/Linux/cron/cron.component';
import { FtpComponent } from './Pages/Protocoles/ftp/ftp.component';
import { NfsComponent } from './Pages/Protocoles/nfs/nfs.component';
import { SmtpComponent } from './Pages/Protocoles/smtp/smtp.component';
import { SshComponent } from './Pages/Protocoles/ssh/ssh.component';
import { Enum4linuxComponent } from './Pages/Outils/enum4linux/enum4linux.component';
import { HydraComponent } from './Pages/Outils/hydra/hydra.component';
import { JohnComponent } from './Pages/Outils/john/john.component';
import { MetasploitComponent } from './Pages/Outils/metasploit/metasploit.component';
import { NmapComponent } from './Pages/Outils/nmap/nmap.component';
import { MysqlComponent } from './Pages/Bases_de_donnees/mysql/mysql.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'Linux/systeme_de_fichiers', component: SystemeDeFichierComponent},
  { path: 'Linux/cron', component: CronComponent},
  { path: 'Protocoles/ftp', component: FtpComponent},
  { path: 'Protocoles/nfs', component: NfsComponent},
  { path: 'Protocoles/smtp', component: SmtpComponent},
  { path: 'Protocoles/ssh', component: SshComponent},
  { path: 'Outils/enum4linux', component: Enum4linuxComponent},
  { path: 'Outils/hydra', component: HydraComponent},
  { path: 'Outils/john', component: JohnComponent},
  { path: 'Outils/metasploit', component: MetasploitComponent},
  { path: 'Outils/nmap', component: NmapComponent},
  { path: 'Bases_de_donnees/mysql', component: MysqlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
