'use strict';

const crypto = require('crypto');

const User = use('App/Models/User');
const Mail = use('Mail');

const moment = require('moment');

class ForgotPasswordController {
  async store({ request, response }) {
    try {
      const email = request.input('email');
      const user = await User.findByOrFail('email', email);

      user.token = crypto.randomBytes(10).toString('hex');
      user.token_created_at = new Date();

      await user.save();

      //primeiro parametro é o template, segundo são os parametros para o email usar (variáveis)
      //Ele é um array porque o nosso email pode ter uma versão texto além do html, com isso você pode ter dois templates
      await Mail.send(
        ['emails.forgot_password'],
        {
          email,
          token: user.token,
          link: `${request.input('redirect_url')}?token=${user.token}`,
        },
        message => {
          message
            .to(user.email)
            .from('vinicius_augutis@hotmail.com', 'Vinicius Augutis')
            .subject('Recuperação de senha');
        }
      );
    } catch (err) {
      return response.status(err.status).send({
        error: { message: 'Algo não deu certo, esse e-mail existe?' },
      });
    }
  }

  async update({ request, response }) {
    try {
      const { token, password } = request.all();

      const user = await User.findByOrFail('token', token);

      const tokenExpired = moment()
        .subtract('2', 'days')
        .isAfter(user.token_created_at);

      if (tokenExpired) {
        return response.status(401).send({
          error: { message: 'Token de recuperação está expirado' },
        });
      }

      user.token = null;
      user.token_created_at = null;
      user.password = password;

      await user.save()

    } catch (err) {
      return response.status(err.status).send({
        error: { message: 'Algo deu errado ao recuperar sua senha' },
      });
    }
  }
}

module.exports = ForgotPasswordController;
