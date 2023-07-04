import type { App_RoutingForms_Form } from "@prisma/client";

import { renderEmail } from "@calcom/emails";
import BaseEmail from "@calcom/emails/templates/_base-email";

export default class EmailReminderSender extends BaseEmail {
  to: string;
  subject: string;
  text: string;
  html: string;

  constructor({ to, subject, text, html}) {
    super();
    this.to = to;
    this.subject = subject;
    this.text = text;
    this.html = html;
  }

  protected getNodeMailerPayload(): Record<string, unknown> {
    return {
      from: `${this.getMailerOptions().name} <${this.getMailerOptions().from}>`,
      to: this.to,
      subject: this.subject,
      html: this.html,
      text: this.text
    };
  }
}
