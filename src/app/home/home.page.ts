import { Component, OnInit } from '@angular/core';
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

  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  ngOnInit(): void {
    this.auditCreateForm = this.formBuilder.group({
      name: [''],
      type: [this.type],
      scopeOfAudit: [''],
    });
  }
}
