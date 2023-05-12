import { Component, Input, ElementRef, OnInit, ViewChild } from '@angular/core';
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


  ngOnInit(): void {
    AOS.init();
  }

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    this.disableForm(nameField, messageField, emailField, sendButton);

    let fd = new FormData()
    fd.append('name', nameField.value);
    fd.append('message', 'Email:'+ emailField.value + `\n\n` + 'message:' + messageField.value);
    //send 
    await fetch('http://kevin-rohlf.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'post',
        body: fd
      }
    )
    this.enableForm(nameField, messageField, emailField, sendButton);
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
}
