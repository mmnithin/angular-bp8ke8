import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';
  pay = {
    isSuccess: true,
    htmlForm:
      "<script>let form = document.createElement('form');form.action = 'https://testsecureacceptance.cybersource.com/pay';form.method = 'POST';let inputaccess_key = document.createElement('input'); inputaccess_key.name='access_key'; inputaccess_key.value='b644cb983158366da28d74153f22f08d'; form.appendChild(inputaccess_key); let inputprofile_id = document.createElement('input'); inputprofile_id.name='profile_id'; inputprofile_id.value='drinkies_egp'; form.appendChild(inputprofile_id); let inputtransaction_uuid = document.createElement('input'); inputtransaction_uuid.name='transaction_uuid'; inputtransaction_uuid.value='d23d3f97d5a747988cf176ed466c3ac1'; form.appendChild(inputtransaction_uuid); let inputsigned_field_names = document.createElement('input'); inputsigned_field_names.name='signed_field_names'; inputsigned_field_names.value='access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency'; form.appendChild(inputsigned_field_names); let inputunsigned_field_names = document.createElement('input'); inputunsigned_field_names.name='unsigned_field_names'; inputunsigned_field_names.value=''; form.appendChild(inputunsigned_field_names); let inputsigned_date_time = document.createElement('input'); inputsigned_date_time.name='signed_date_time'; inputsigned_date_time.value='2023-04-19T05:12:07Z'; form.appendChild(inputsigned_date_time); let inputlocale = document.createElement('input'); inputlocale.name='locale'; inputlocale.value='ar'; form.appendChild(inputlocale); let inputtransaction_type = document.createElement('input'); inputtransaction_type.name='transaction_type'; inputtransaction_type.value='authorization'; form.appendChild(inputtransaction_type); let inputreference_number = document.createElement('input'); inputreference_number.name='reference_number'; inputreference_number.value='a5df18e7013740d9b6cef7b6c74e1d5e'; form.appendChild(inputreference_number); let inputamount = document.createElement('input'); inputamount.name='amount'; inputamount.value='5265.00'; form.appendChild(inputamount); let inputcurrency = document.createElement('input'); inputcurrency.name='currency'; inputcurrency.value='EGP'; form.appendChild(inputcurrency); let inputsignature = document.createElement('input'); inputsignature.name='signature'; inputsignature.value='L7D/5JsNag/Z9ECiX5d+Z8MDrOh+s2E5g+q5HF88AcE='; form.appendChild(inputsignature); document.body.append(form);form.submit();</script>",
  };

  yappy = {
    htmlForm:
      "<script>let form = document.createElement('form');form.action = '';form.method = 'POST';document.body.append(form);form.submit();</script>",
  };

  constructor() {
    this.parseAnswer(this.yappy.htmlForm);
    this.parseAnswer(this.pay.htmlForm);
  }

  private parseAnswer(responseHtml: string): void {
    const findScript = responseHtml.match(
      new RegExp(/<script.*>(.*?)<\/script>/, 's')
    );

    if (findScript && findScript[1]) {
      console.log('findScript', findScript);
    } else {
      console.log('findScript Else', responseHtml);
    }
  }
}

bootstrapApplication(App);
