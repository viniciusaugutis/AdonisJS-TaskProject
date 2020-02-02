'use strict'

const User = use('App/Models/User')

class UserController {

  async store ({request, response}) {
    const data = request.only(['username', 'email', 'password'])
    //const data = request.all(); pega todos os dados que vieram no body

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
