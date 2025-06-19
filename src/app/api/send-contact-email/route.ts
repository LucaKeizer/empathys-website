import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { naam, email, telefoonnummer, bericht } = await request.json();

    // Validate required fields
    if (!naam || !email || !bericht) {
      return NextResponse.json({
        success: false,
        error: 'Naam, email en bericht zijn verplicht.',
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        success: false,
        error: 'Ongeldig e-mailadres.',
      }, { status: 400 });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <noreply@empathys.nl>', // Must be from your verified domain
      to: ['info@empathys.nl'],
      replyTo: email, // User's email for easy reply
      subject: `Nieuw contactformulier bericht van ${naam}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nieuw contactformulier bericht</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #0d9488; margin: 0 0 10px 0;">Nieuw bericht via contactformulier</h2>
            <p style="color: #6b7280; margin: 0;">Empathys.nl - ${new Date().toLocaleString('nl-NL')}</p>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; width: 150px;">Naam:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">${naam}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">E-mail:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${email}" style="color: #0d9488; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Telefoon:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">${telefoonnummer || 'Niet opgegeven'}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px;">
              <h3 style="color: #374151; margin: 0 0 10px 0;">Bericht:</h3>
              <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #0d9488;">
                <p style="margin: 0; white-space: pre-wrap;">${bericht}</p>
              </div>
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 6px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #6b7280;">
              Dit bericht is verzonden via het contactformulier op empathys.nl<br>
              U kunt direct antwoorden op dit e-mailadres.
            </p>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({
        success: false,
        error: 'Er ging iets mis bij het verzenden van uw bericht. Probeer het later opnieuw.',
      }, { status: 500 });
    }

    console.log('Email sent successfully:', data);

    return NextResponse.json({
      success: true,
      message: 'Uw bericht is succesvol verzonden!',
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({
      success: false,
      error: 'Er ging iets mis bij het verzenden van uw bericht. Probeer het later opnieuw.',
    }, { status: 500 });
  }
}