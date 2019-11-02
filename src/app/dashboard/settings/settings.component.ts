import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit, AfterViewInit {
  eMail: string;
  
  constructor() {
  }

  ngOnInit() {
    this.eMail = 'companyEmail@email.com';
  }
  ngAfterViewInit() {
    const activeTabs = document.getElementsByClassName('default-active');
    for (let i = 0; i < activeTabs.length; i++) {
      (<HTMLElement>activeTabs[i]).click();
    }
  }

  tabClick(evt, id) {
    const tabcontents = document.querySelectorAll('.h-tab .tab-content');
    for (let i = 0; i < tabcontents.length; i++) {
      (<HTMLElement>tabcontents[i]).style.display = 'none';
    }
    const tablinks = document.querySelectorAll('.h-tab .tab-link');
    for (let i = 0; i < tablinks.length; i++) {
      const tablink = <HTMLElement>tablinks[i];
      tablink.className = tablink.className.replace(' active', '');
    }
    document.getElementById(id).style.display = 'block';
    evt.currentTarget.className += ' active';
  }
  vTabClick(evt, id) {
    const tabcontents = document.querySelectorAll('.v-tab .tab-content');
    for (let i = 0; i < tabcontents.length; i++) {
      (<HTMLElement>tabcontents[i]).style.display = 'none';
    }
    const tablinks = document.querySelectorAll('.v-tab .tab-link');
    for (let i = 0; i < tablinks.length; i++) {
      const tablink = <HTMLElement>tablinks[i];
      tablink.className = tablink.className.replace(' active', '');
    }
    document.getElementById(id).style.display = 'block';
    evt.currentTarget.className += ' active';
  }
}
