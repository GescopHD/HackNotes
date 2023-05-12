import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { HomeComponent } from './Pages/home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SystemeDeFichierComponent } from './Pages/Linux/systeme-de-fichier/systeme-de-fichier.component';
import { CronComponent } from './Pages/Linux/cron/cron.component';
import { FtpComponent } from './Pages/Protocoles/ftp/ftp.component';
import { NfsComponent } from './Pages/Protocoles/nfs/nfs.component';
import { SshComponent } from './Pages/Protocoles/ssh/ssh.component';
import { SmtpComponent } from './Pages/Protocoles/smtp/smtp.component';
import { Enum4linuxComponent } from './Pages/Outils/enum4linux/enum4linux.component';
import { HydraComponent } from './Pages/Outils/hydra/hydra.component';
import { JohnComponent } from './Pages/Outils/john/john.component';
import { MetasploitComponent } from './Pages/Outils/metasploit/metasploit.component';
import { MysqlComponent } from './Pages/Bases_de_donnees/mysql/mysql.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    SystemeDeFichierComponent,
    CronComponent,
    FtpComponent,
    NfsComponent,
    SshComponent,
    SmtpComponent,
    Enum4linuxComponent,
    HydraComponent,
    JohnComponent,
    MetasploitComponent,
    MysqlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

