import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  messageSent: boolean;
  success: boolean;

  ngOnInit(): void {
    AOS.init();
  }

  public messageForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ], []),
    email: new FormControl('', [
      Validators.email,
      Validators.required
    ], []),
    message: new FormControl('', [
      Validators.required
    ], []),
  })

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    this.disableForm(nameField, messageField, emailField, sendButton);

    let fd = new FormData()
    fd.append('name', nameField.value);
    fd.append('message', 'Email: '+ emailField.value + `\n\n` + 'Message: ' + messageField.value);
    //send 
    await fetch('https://kevin-rohlf.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'post',
        body: fd
      }
    )
    this.clearForm(nameField, messageField, emailField, sendButton)
    this.enableForm(nameField, messageField, emailField, sendButton);
    this.success = true;
    setTimeout(() => {
      this.success = false;
    }, 3000);
  }


  disableForm(nameField, messageField, emailField, sendButton) {
    nameField.disabled = true;
    messageField.disabled = true;
    emailField.disabled = true;
    sendButton.disabled = true;
  }

  enableForm(nameField, messageField, emailField, sendButton) {
    nameField.disabled = false;
    messageField.disabled = false;
    emailField.disabled = false;
    sendButton.disabled = false;
  }

  clearForm(nameField, messageField, emailField, sendButton){
    nameField.value = '';
    messageField.value = '';
    emailField.value = '';
    sendButton.value = '';
  }


}
