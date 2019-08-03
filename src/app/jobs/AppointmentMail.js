import Mail from '../../lib/Mail';

class AppointmentMail {
  get key() {
    return 'AppointmentMail';
  }

  async handle({ data }) {
    const { providerMail, user, formattedDate } = data;

    console.log('A fila executou');

    await Mail.sendMail({
      to: `${providerMail.name} <${providerMail.email}>`,
      subject: 'Você tem um novo agendamento',
      template: 'appointment',
      context: {
        provider: providerMail.name,
        user: user.name,
        date: formattedDate,
      },
    });
  }
}

export default new AppointmentMail();
