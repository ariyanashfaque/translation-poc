import { IonFab } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  type: string = 'Annual';
  auditCreateForm: FormGroup;
  selectedLang: string = 'en';
  @ViewChild('IonFab', { static: false }) fab: IonFab;
  langs: any[] = [
    { value: 'fr', title: 'French' },
    { value: 'en', title: 'English' },
    { value: 'es', title: 'Spanish' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    this.translate.addLangs(['en', 'es', 'fr']);
    this.translate.use('en');
  }

  ngOnInit(): void {
    this.auditCreateForm = this.formBuilder.group({
      name: [''],
      type: [this.type],
      scopeOfAudit: [''],
    });
  }

  handleLangChange = (lang: string) => {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.selectedLang = lang;
    this.fab.close();
  };
}
