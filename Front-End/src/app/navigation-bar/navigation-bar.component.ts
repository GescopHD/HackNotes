import {Component, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;

  categories = [
    {nomCat:"Linux",
    hidden:true,
    pages:[{
      nomPage:"Système de fichiers",
      route:"Linux/systeme_de_fichiers"
    },
    {
      nomPage:"cron",
      route:"Linux/cron"
    }]},

    {nomCat:"Windows",
    hidden:true,
    pages:[]},

    {nomCat:"Protocoles",
    hidden:true,
    pages:[{
      nomPage:"FTP",
      route:"Protocoles/ftp"
    },
    {
      nomPage:"NFS",
      route:"Protocoles/nfs"
    },
    {
      nomPage:"SSH",
      route:"Protocoles/ssh"
    },
    {
      nomPage:"SMTP",
      route:"Protocoles/smtp"
    }]},

    {nomCat:"Outils",
    hidden:true,
    pages:[{
      nomPage:"Nmap",
      route:"Outils/nmap"
    },
    {
      nomPage:"Enum4linux",
      route:"Outils/enum4linux"
    },
    {
      nomPage:"Hydra",
      route:"Outils/hydra"
    },
    {
      nomPage:"John",
      route:"Outils/john"
    },
    {
      nomPage:"Metasploit",
      route:"Outils/metasploit"
    }]},

    {nomCat:"Bases de données",
    hidden:false,
    pages:[{
      nomPage:"MySQL",
      route:"Bases_de_donnees/mysql"
    }]}
  ]

  showHide(categorie: { hidden: boolean; }) {
    console.log("clicked");
    categorie.hidden = !categorie.hidden;

}

}
