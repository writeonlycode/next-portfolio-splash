export function generateEmail({
  name,
  message,
  email,
}: {
  name: string;
  message: string;
  email: string;
}) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style>
      @font-face {
        font-family: 'League Spartan';
        font-style: normal;
        font-weight: 400;
        mso-font-alt: 'Arial';
        src: url(https://fonts.gstatic.com/s/leaguespartan/v11/kJEqBuEW6A0lliaV_m88ja5TwvZ_LZmFDA.woff2) format('woff2');
      }

      * {
        font-family: 'League Spartan', Arial;
      }
    </style>
  </head>

  <body data-id="__react-email-body" style="color:#000C24;background-color:#FFFFFF;font-family:League Spartan">
    <table align="center" width="100%" data-id="__react-email-container" role="presentation" cellspacing="0" cellpadding="0" border="0" style="max-width:37.5em;margin:0 auto;padding:2rem;width:80ch">
      <tbody>
        <tr style="width:100%">
          <td>
            <table align="center" width="100%" data-id="react-email-section" border="0" cellpadding="0" cellspacing="0" role="presentation">
              <tbody>
                <tr>
                  <td>
                    <p data-id="react-email-text" style="font-size:32px;line-height:1.3;margin:16px 0;font-weight:700">
                      You've received a message from <span style="color:#ff5a5f">${name}:</span>
                    </p>
                    <p data-id="react-email-text" style="font-size:18px;line-height:1.4;margin:16px 0;padding:24px;background-color:#f2f3f3;color:#000C24;border-radius:4px">
                      "${message}"
                    </p>
                    <p data-id="react-email-text" style="font-size:18px;line-height:1.4;margin:16px 0">
                      You can respond to this message directly by emailing ${name} at <a href="mailto:${email}" data-id="react-email-link" target="_blank" style="color:#ff5a5f;text-decoration:none;font-size:18px;line-height:1.4">${email}</a>.
                    </p>
                    <table align="center" width="100%" data-id="react-email-row" role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`;
}

export function generateEmailConfirmation({
  name,
  message,
  email,
}: {
  name: string;
  message: string;
  email: string;
}) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style>
      @font-face {
        font-family: 'League Spartan';
        font-style: normal;
        font-weight: 400;
        mso-font-alt: 'Arial';
        src: url(https://fonts.gstatic.com/s/leaguespartan/v11/kJEqBuEW6A0lliaV_m88ja5TwvZ_LZmFDA.woff2) format('woff2');
      }

      * {
        font-family: 'League Spartan', Arial;
      }
    </style>
  </head>

  <body data-id="__react-email-body" style="color:#000C24;background-color:#FFFFFF;font-family:League Spartan">
    <table align="center" width="100%" data-id="__react-email-container" role="presentation" cellspacing="0" cellpadding="0" border="0" style="max-width:37.5em;margin:0 auto;padding:2rem;width:80ch">
      <tbody>
        <tr style="width:100%">
          <td>
            <table align="center" width="100%" data-id="react-email-section" border="0" cellpadding="0" cellspacing="0" role="presentation">
              <tbody>
                <tr>
                  <td>
                    <p data-id="react-email-text" style="font-size:32px;line-height:1.3;margin:16px 0;font-weight:700">
                      Thank you for the message, ${name}!
                    </p>
                    <p data-id="react-email-text" style="font-size:18px;line-height:1.4;margin:16px 0">
                      Thank you for reaching out! Your message has been successfully sent. I&apos;ll be in touch with you shortly. Have a great day!
                    </p>
                    <table align="center" width="100%" data-id="react-email-row" role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`;
}
